


// fungsi untuk mengubah icon sliding door mennjadi bukak tutup
function sliding() {
    const bSldDoor = document.getElementById('bSldDoor');
    const sliding=document.getElementById('sliding-door-icon');
    bSldDoor.addEventListener('click',function(){
        switch (bSldDoor.innerHTML) {
            case 'Open':
              bSldDoor.innerHTML = 'Close';
              sliding.src="img/opened-sliding-door.png"
              break;
            case 'Close':
              bSldDoor.innerHTML = 'Open';
              sliding.src="img/sliding-door-icon.png"
              break;
            default:
              break;
    }})
}






// fungsi untuk mengubah icon dali light untuk hidup atau mati
function dali() {
    const bDali = document.getElementById('bDali');
    const dali=document.getElementById('dali-icon');
    const bColor = document.querySelector('.lampu')
    bDali.addEventListener('click',function(){
        switch (bDali.innerHTML) {
            case 'On':
              bDali.innerHTML = 'Off';
              dali.src="img/lampu-icon.png";
              bColor.style.borderColor='yellow';
              bColor.style.borderWidth ='3px';
              break;
            case 'Off':
              bDali.innerHTML = 'On';
              dali.src="img/lampu-mati-icon.png";
              bColor.style.borderColor='white';
              bColor.style.borderWidth ='2px';
              break;
            default:
              break;
    }})
}






// fungsi untuk mengubah icon surgical light hidup atau mati
function surgicalLight() {
  const bSurgical = document.getElementById('bSurgicalLight');
  const surgical=document.getElementById('lampu-img');
  const bColor = document.querySelector('.surgical-light')
  bSurgical.addEventListener('click',function(){
    surgical.style.opacity = '0';
      switch (bSurgical.innerHTML) {
          case 'On':
            bSurgical.innerHTML = 'Off';
            setTimeout(function(){
              surgical.src="img/lampu-icon.png";
              surgical.style.opacity = '1';
            },100)
            bColor.style.borderColor='yellow';
            bColor.style.borderWidth ='3px';
            break;
          case 'Off':
            bSurgical.innerHTML = 'On';
            setTimeout(function(){
              surgical.src="img/lampu-mati-icon.png";
              surgical.style.opacity = '1';
            },100)
            bColor.style.borderColor='white';
            bColor.style.borderWidth ='2px';
            break;
          default:
            break;
  }})
}
sliding();
dali();
surgicalLight();
  