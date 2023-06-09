const nextBtn = document.querySelector('.next');
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


  manual.addEventListener('click', function(){
    roomInfo.classList.display='none';
    column1.style.display = 'none';
    column2.style.display = 'none';
    container.classList.add('active');
  });
  
 // Event listener pertama: Menangani ketika kedua kolom disembunyikan
nextBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    if (column1.style.display === 'none' && column2.style.display === 'none') {
        // Check which container is currently active
        if (container.classList.contains('active')) {
            container.classList.remove('active');
            container2.classList.add('active');
        } else if (container2.classList.contains('active')) {
            container2.classList.remove('active');
            container.classList.add('active');
        }
    }
});

// Event listener kedua: Menangani ketika salah satu atau kedua kolom ditampilkan dan elemen roomInfo diaktifkan
nextBtn.addEventListener('click', function(event){
    event.preventDefault();

    if (column1.style.display !== 'none' || column2.style.display !== 'none') {
        column1.style.display = 'none';
        column2.style.display = 'none';
        roomInfo.classList.add('active');
    }
    else if (roomInfo.classList.contains('active')) {
        column1.style.display = 'grid';
        column2.style.display = 'grid';
        roomInfo.classList.remove('active');
    }
});



// Event listener pertama: Menangani ketika kedua kolom disembunyikan
prevBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    if (column1.style.display === 'none' && column2.style.display === 'none') {
        // Check which container is currently active
        if (container.classList.contains('active')) {
            container.classList.remove('active');
            container2.classList.add('active');
        } else if (container2.classList.contains('active')) {
            container2.classList.remove('active');
            container.classList.add('active');
        }
    }
});

// Event listener kedua: Menangani ketika salah satu atau kedua kolom ditampilkan dan elemen roomInfo diaktifkan
prevBtn.addEventListener('click', function(event){
    event.preventDefault();

    if (column1.style.display !== 'none' || column2.style.display !== 'none') {
        column1.style.display = 'none';
        column2.style.display = 'none';
        roomInfo.classList.add('active');
    }
    else if (roomInfo.classList.contains('active')) {
        column1.style.display = 'grid';
        column2.style.display = 'grid';
        roomInfo.classList.remove('active');
    }
});

  // Tombol home
  homeBtn.addEventListener('click', function() {
  
      column1.style.display = 'grid';
      column2.style.display = 'grid';
      container2.classList.remove('active');
      container.classList.remove('active');
      roomInfo.classList.remove('active');
      boxLogin.classList.remove('active');
    });

// tombol setting untuk login
setting.addEventListener('click',function(event){
    
    boxLogin.classList.toggle('active');
    
})


// fungsi untuk mengambil data tremperature dari database

function getTemperature() {
    // AJAX request untuk mengambil semua data suhu dari endpoint /suhu
    fetch('/suhu')
      .then(response => response.json())
      .then(data => {
        // urutkan data berdasarkan waktu dari terlama ke terbaru
        data.sort((a, b) => new Date(a.waktu) - new Date(b.waktu));
  
        // loop melalui semua data dan tampilkan pada elemen dengan ID suhu-ruangan
        const suhuElem = document.querySelector('#suhu-ruangan');
        suhuElem.innerHTML = ''; // kosongkan isi elemen
        data.forEach(datum => {
          const suhu = datum.nilai_suhu;
          const waktu = new Date(datum.waktu).toLocaleString();
          const suhuItem = document.createElement('div');
          suhuItem.textContent = `${suhu} derajat Celsius pada ${waktu}`;
          suhuElem.appendChild(suhuItem);
        });
      })
      .catch(error => {
        console.error(error)
      });
  }
  
  // panggil fungsi getTemperature() setiap 5 detik untuk mengambil suhu secara berkala
  setInterval(getTemperature, 5000);
  
  

  