const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const column1 = document.querySelector('.column1');
const column2 = document.querySelector('.column2');
const manual = document.querySelector('.manual-settings');
const homeBtn = document.querySelector('.home');
const roomInfo = document.querySelector('.room-info');

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
    });