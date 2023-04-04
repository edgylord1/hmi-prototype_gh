 // script for digital clocks from codepen starts here
 var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});
/* var clock = new Vue({ el: '#clock', data: { time: '', date: '' } }); - baris kode ini membuat sebuah objek Vue yang disimpan pada variabel clock. 
Objek ini memiliki dua properti data, 
yaitu time dan date yang diinisialisasi sebagai string kosong.
*/

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};
/*var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
 - baris ini membuat sebuah array dengan nama week yang berisi 
 nama-nama hari dalam seminggu.

 var timerID = setInterval(updateTime, 1000); - 
 baris ini membuat interval yang akan memanggil fungsi updateTime 
 setiap 1000 milidetik (1 detik), 
 dan menyimpan ID interval ke dalam variabel timerID.

 updateTime(); - baris ini memanggil fungsi updateTime() untuk menginisialisasi jam.
 */

 /*Fungsi updateTime() akan memperbarui properti time dan date pada objek clock dengan waktu saat ini. Baris kode var cd = new Date(); 
 membuat objek Date baru yang merepresentasikan waktu saat ini.
*/

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
/*Fungsi zeroPadding() akan menambahkan nol di depan angka hingga angka tersebut mencapai jumlah digit yang diinginkan.
 Ini dilakukan agar format waktu dan tanggal selalu konsisten. Fungsi zeroPadding() mengambil dua argumen, 
 yaitu num yang merupakan angka yang ingin dipad, dan digit yang merupakan jumlah digit yang diinginkan setelah padding.

Kode var zero = ''; inisialisasi variabel zero sebagai string kosong. 
Kemudian, perulangan for pada baris for(var i = 0; i < digit; i++) { zero += '0'; } 
akan menambahkan karakter '0' ke variabel zero pada setiap iterasi, hingga panjang variabel zero mencapai digit.

Terakhir, fungsi zeroPadding() mengembalikan string yang terdiri dari zero dan num, 
tetapi hanya termasuk karakter sebanyak digit dari string yang dihasilkan, dengan menggunakan metode slice(). 
Hal ini memastikan bahwa string yang dihasilkan memiliki jumlah karakter yang tepat,
  //script for digital clocks from codepen ends here
*/