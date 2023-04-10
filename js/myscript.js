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
    column1.classList.remove('active');
    column2.classList.remove('active');
    container.classList.add('active');
  });
  
 // Event listener pertama: Menangani ketika kedua kolom disembunyikan
nextBtn.addEventListener('click', function(event){
    event.preventDefault();
    if (column1.classList.contains('active') && column2.classList.contains('active')) {
        column1.classList.remove('active');
        column2.classList.remove('active');
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
    }
});   





prevBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    if (column1.classList.contains('active') && column2.classList.contains('active')) {
        column1.classList.remove('active');
        column2.classList.remove('active');
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
    }
});

// prevBtn.addEventListener('click', function(event){
//     event.preventDefault();
    
//     if (container2.classList.contains('active')) {
//         container2.classList.remove('active');
//         roomInfo.classList.add('active');
//     }
// });
// prevBtn.addEventListener('click', function(event){
//     event.preventDefault();
    
//     if (roomInfo.classList.contains('active')) {
//         roomInfo.classList.remove('active');
//         column1.classList.add('active');
//         column2.classList.add('active');
//     }
// });
  // Tombol home
  homeBtn.addEventListener('click', function() {
  
    if(!column1.classList.contains('active')){  
        column1.classList.add('active');
    }
    if(!column2.classList.contains('active')){  
        column2.classList.add('active');
    }
      container2.classList.remove('active');
      container.classList.remove('active');
      roomInfo.classList.remove('active');
      boxLogin.classList.remove('active');
});

// tombol setting untuk login
setting.addEventListener('click',function(event){
    
    boxLogin.classList.toggle('active');
    
})