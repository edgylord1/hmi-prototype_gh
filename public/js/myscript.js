const nextBtn = document.querySelector('.next-button');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const column1 = document.querySelector('.column1');
const column2 = document.querySelector('.column2');
const manual = document.querySelector('.manual-settings');
const homeBtn = document.querySelector('.home');
const roomInfo = document.querySelector('.room-info');
const setting = document.getElementById('settings');
const boxLogin = document.querySelector('.login-box');
const dForm = document.querySelector('.row');


manual.addEventListener('click', function(){
    column1.classList.remove('active');
    column2.classList.remove('active');
    dForm.classList.remove('active');
    container.classList.add('active');
  });
  
 // Event listener pertama: Menangani ketika kedua kolom disembunyikan
nextBtn.addEventListener('click', function(event){
    event.preventDefault();
    if (column1.classList.contains('active') && column2.classList.contains('active')) {
        column1.classList.remove('active');
        column2.classList.remove('active');
        dForm.classList.remove('active');
        roomInfo.classList.add('active');
   }
   else if (roomInfo.classList.contains('active')){
        roomInfo.classList.remove('active');
        container2.classList.add('active');
   }

    else if (container2.classList.contains('active')){
        container2.classList.remove('active');
        column1.classList.add('active');
        column2.classList.add('active');
        dForm.classList.add('active');
    }
});   





prevBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    if (column1.classList.contains('active') && column2.classList.contains('active')) {
        column1.classList.remove('active');
        column2.classList.remove('active');
        dForm.classList.remove('active');
        container2.classList.add('active');
    }

    else if (container2.classList.contains('active')){
        container2.classList.remove('active');
        roomInfo.classList.add('active');
    }
    else if(roomInfo.classList.contains('active')){
        roomInfo.classList.remove('active');
        column1.classList.add('active');
        column2.classList.add('active');   
        dForm.classList.add('active');
    }
});


  // Tombol home
  homeBtn.addEventListener('click', function() {
  
    if(!column1.classList.contains('active')){  
        column1.classList.add('active');
    }
    if(!column2.classList.contains('active')){  
        column2.classList.add('active');
    }
    if(!dForm.classList.contains('active')){  
      dForm.classList.add('active');
  }
      container2.classList.remove('active');
      container.classList.remove('active');
      roomInfo.classList.remove('active');
      boxLogin.classList.remove('active');
});

// tombol setting untuk login
setting.addEventListener('click',function(){
    
    boxLogin.classList.toggle('active');
    
})



//fungsi untuk membaca data temperature dari database 

function getTemperature() {
    fetch('/suhu')
      .then(response => response.json())
      .then(data => {
        const suhuElem = document.querySelector('#suhu-ruangan')
        let i = 0; // indeks data
        setInterval(() => {
          // tampilkan data ke dalam elemen dengan ID suhu-ruangan
          suhuElem.innerHTML = data[i].nilai_suhu + "<sup>\u00B0C</sup>";

          // increment indeks data
          i++;
          // reset indeks data ke 0 jika sudah mencapai data terbaru
          if (i === data.length) {
            i = 0;
          }
        }, 5000);
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  // panggil fungsi getTemperature() untuk mengambil suhu secara berkala
  getTemperature();



//fungsi untuk membaca data kelembapan dari data database 
function getKelembapan() {
  // AJAX request untuk mengambil data kelembapan terbaru dari endpoint /kelembapan
  fetch('/kelembapan')
    .then(response => response.json())
    .then(data => {
      // tampilkan nilai kelembapan pada elemen dengan ID kelembapan-ruangan
      const kelembapanElem = document.querySelector('#kelembapan-ruangan')
      kelembapanElem.textContent = data[0].nilai_kelembapan + '%'
    })
    .catch(error => {
      console.error(error)
    })
}

// panggil fungsi getKelembapan() setiap 5 detik untuk mengambil kelembapan secara berkala
setInterval(getKelembapan, 5000)




function getPressure() {
    fetch('/tekanan')
      .then(response => response.json())
      .then(data => {
        const tekananElem = document.querySelector('#tekanan-ruangan');
        tekananElem.textContent = data[0].nilai_tekanan + ' Pa';
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  setInterval(getPressure, 5000); 
  

//fungsi untuk mengambil data nama dokter pasien dan jenis operasi terakhir

fetch('/latest-data')
  .then(response => response.json())
  .then(data => {
    const namaDokterElemen = document.querySelector('.dokter');
    const namaPasienElemen = document.querySelector('.pasien');
    const jenisOperasiElemen = document.querySelector('.operasi');

    namaDokterElemen.innerHTML = 'Dr. ' + data.namaDokter;
    namaPasienElemen.innerHTML = data.namaPasien;
    jenisOperasiElemen.innerHTML = data.jenisOperasi;
  });




  //  mengirimkan status sliding door ke server

  document.getElementById("bSldDoor").addEventListener("click", function() {
    const buttonHtml = this.innerHTML;
    let status = false;
    if (buttonHtml === "Open") {
      status = true;
    } else if (buttonHtml === "Close") {
      status = false;
    }
  
    fetch("/sliding-door", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: status })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  });


  // mengirimkan status surgical light ke server

  document.getElementById("bSurgicalLight").addEventListener("click", function() {
    const buttonHtml = this.innerHTML;
    let status = false;
    if (buttonHtml === "On") {
      status = true;
    } else if (buttonHtml === "Off") {
      status = false;
    }
  
    fetch("/surgical-light", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: status })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  });





  // mengirimkan status dali light ke server

  document.getElementById("bDali").addEventListener("click", function() {
    const buttonHtml = this.innerHTML;
    const daliStatus = document.querySelector('.dali-light-status');
    let status = false;
    if (buttonHtml === "On") {
      status = true;
    }
  
    fetch("/dali-light", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: status })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (status) {
        daliStatus.innerHTML = "On";
      } else {
        daliStatus.innerHTML = "Off";
      }
    })
    .catch(error => {
      console.error(error);
    });
  });
  
  
  


// mengambil status terakhir sliding door dari server kemudian megubah tampilan sesuai status

function getSldDoorStatus(){
fetch('/sliding-door-status')
.then(response => response.json())
.then(data => {
  const bSldDoor = document.getElementById('bSldDoor');
  const sliding=document.getElementById('sliding-door-icon');
  if(data[0].status){
    bSldDoor.innerHTML = 'Close';
    sliding.src="img/opened-sliding-door.png"
  }
  else if(!data[0].status){
    bSldDoor.innerHTML = 'Open';
    sliding.src="img/sliding-door-icon.png"
  }
  
})
.catch(error => {
  console.error(error);
});
}

// mengambil status terakhir dali light dari server kemudian mengubah tampilan sesuai status

function getDaliStatus(){
fetch('/dali-light-status')
.then(response => response.json())
.then(data => {
  const bDali = document.getElementById('bDali');
  const dali = document.getElementById('dali-icon');
  const bColor = document.querySelector('.lampu');
  const daliStatus = document.querySelector('.dali-light-status');
  if(data[0].status){
    bDali.innerHTML = 'Off';
    dali.src="img/lampu-icon.png";
    bColor.style.borderWidth ='3px';
    bColor.style.borderColor='yellow';
    daliStatus.innerHTML = 'On'
  }
  else if(!data[0].status){
    bDali.innerHTML = 'On';
    dali.src="img/lampu-mati-icon.png";
    bColor.style.borderWidth ='2px';
    bColor.style.borderColor='white';
    daliStatus.innerHTML = 'Off';
  }
  
})
.catch(error => {
  console.error(error);
});
}

getSldDoorStatus();
getDaliStatus();

