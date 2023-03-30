const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const column1 = document.querySelector('.column1')
const column2 = document.querySelector('.column2')

nextBtn.addEventListener('click', function(){
    container.style.display ='grid';
    container2.style.display ='none';
    column1.style.display ='none';
    column2.style.display ='none';
   preventDefault();
})
prevBtn.addEventListener('click', function(){
    container2.style.display ='none';
    container.style.display ='grid';
   preventDefault();
})