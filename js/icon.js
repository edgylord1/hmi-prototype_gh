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
function dali() {
    const bDali = document.getElementById('bDali');
    const dali=document.getElementById('dali-icon');
    bDali.addEventListener('click',function(){
        switch (bDali.innerHTML) {
            case 'On':
              bDali.innerHTML = 'Off';
              dali.src="img/lampu-icon.png"
              break;
            case 'Off':
              bDali.innerHTML = 'On';
              dali.src="img/lampu-mati-icon.png"
              break;
            default:
              break;
    }})
}
sliding();
dali()
  