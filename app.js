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
 







  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.render('gabung');    
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




app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});

