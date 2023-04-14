const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fragmakyodai12',
  database: 'sensor'
})



app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())


// endpoint untuk mengambil suhu terbaru dari database
app.get('/suhu', (req, res) => {
  // query untuk mengambil suhu terbaru dari tabel suhu
//   const query = 'SELECT nilai_suhu FROM data_suhu ORDER BY waktu DESC LIMIT 1';
const query = 'SELECT waktu, nilai_suhu FROM suhu ORDER BY waktu DESC';

// jalankan query
connection.query(query, (error, results) => {
  if (error) {
    console.error(error); // tampilkan error pada console
    res.status(500).json({ message: 'Internal server error' });
  } else {
    // kirim semua data suhu sebagai response
    res.json(results);
  }
});
});



// endpoint untuk mengambil data kelembapan terbaru dari database
app.get('/kelembapan', (req, res) => {
    // query untuk mengambil kelembapan terbaru dari tabel kelembapan
    const query = 'SELECT waktu, nilai_kelembapan FROM kelembapan ORDER BY waktu DESC';
  
    // jalankan query
    connection.query(query, (error, results) => {
        if (error) {
            console.error(error); // tampilkan error pada console
            res.status(500).json({ message: 'Internal server error' });
        } else {
            // kirim semua data kelembapan sebagai response
            res.json(results);
        }
    });
});



// endpoint untuk mengambil data tekanan terakhir dari database
app.get('/tekanan', (req, res) => {
    const query = 'SELECT waktu, nilai_tekanan FROM tekanan ORDER BY waktu DESC';
    
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });  
 











// endpoint untuk meng-handle form
app.post('/submitform', (req, res) => {
  const namaDokter = req.body.namaDokter;
  const namaPasien = req.body.namaPasien;
  const jenisOperasi = req.body.jenisOperasi;
  console.log(namaDokter);
  console.log(namaPasien);
  console.log(jenisOperasi);

  const query = `INSERT INTO pasien2 (nama_dokter,nama_pasien, jenis_operasi) VALUES ('${namaDokter}', '${namaPasien}', '${jenisOperasi}')`;
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error); // tampilkan error pada console
      res.status(500).json({ message: 'Internal server error' });
    } else {
      // res.status(200).json({ message: 'Data berhasil disimpan' });

      res.redirect('/'); // redirect ke halaman awal
    }
  });
});




// untuk menampilkan data dokter pasien dan jenis operasi terakhir
app.get('/latest-data', (req, res) => {
  connection.query('SELECT * FROM pasien2 ORDER BY id DESC LIMIT 1', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const latestData = {
        namaDokter: results[0].nama_dokter,
        namaPasien: results[0].nama_pasien,
        jenisOperasi: results[0].jenis_operasi
      };
      res.json(latestData);
    }
  });
});


app.post('/loginform', (req, res) => {
  const username = 'admin';
  const password = 'admin';
  console.log(req.body.username);
  console.log(req.body.password);
  if (username === req.body.username && password === req.body.password) {
    res.send('Anda berhasil login');
  } else {
    res.redirect('/');
  }
})


// menghandle status sliding door yang dikirimkan melalui client side

app.post("/sliding-door", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO sliding_door (status) VALUES (?)",
    [data.status],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error saving data");
      } else {
        res.send("Data saved successfully");
      }
    }
  );
});




// menghandle status surgical light untuk dimasukan ke database

app.post("/surgical-light", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO surgical_light (status) VALUES (?)",
    [data.status],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error saving data");
      } else {
        res.send("Data saved successfully");
      }
    }
  );
});


// menghandle status dali light untuk dimasukan ke database

app.post("/dali-light", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO dali_light (status) VALUES (?)",
    [data.status],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error saving data");
      } else {
        res.send("Data saved successfully");
      }
    }
  );
});


// // endpoint mengirim status dali light terakhir dari database

// app.get('/dali-light-status', (req, res) => {
//   const query = 'SELECT id, status FROM dali_light ORDER BY id DESC LIMIT 1';
  
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     } else {
//       res.json(results[0]); // mengambil hasil query pertama (hanya satu baris)
//     }
//   });
// });







app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
  res.render('gabung');    
});

// menjalankan server
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});

