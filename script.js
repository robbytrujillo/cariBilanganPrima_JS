
function trail(t){
 
  var n=t.value
   
  while (true) if (n.substring(0,1)=="0") n=n.substring(1, n.length); else break;
   
  t.value=n;
   
  }
   
  var angka;
   
  var a;
   
      function cekprima() {
   
          var obj_angka = document.getElementById('angka');
   
          var i = 0;
   
          if (obj_angka.value=='') {
   
              obj_angka.focus();
   
              alert('Anda Belum Memasukkan bilangan.');
   
              } else {
   
              i = cek_prima(obj_angka.value);
   
              if (i == 0) {
   
                  alert(obj_angka.value+' Adalah bilangan Prima.');
   
              } else if (i == 1) {
   
                  alert(obj_angka.value+' Bukan prima karena kurang dari 2.');
   
              } else {
   
                  alert(obj_angka.value+' Bukan prima karena habis dibagi '+ i +'.');
   
              }
   
              obj_angka.focus();
   
          }
   
      }
   
      function cariprima() {
   
          var obj_angka1 = document.getElementById('angka1');
   
          var obj_angka2 = document.getElementById('angka2');
   
          var obj_daftar = document.getElementById('daftar');
   
          var i = 0;
   
          if (obj_angka1.value=='') {
   
              obj_angka1.focus();
   
              alert('Isi angka pertama.');
   
          } else if (obj_angka2.value=='') {
   
              obj_angka2.focus();
   
              alert('Isi angka kedua.');
   
          } else {
   
              obj_daftar.value = '';
   
              for (i=obj_angka1.value; i<obj_angka2.value; i++) {
   
                  if (i >= 2) {
   
                      if (cek_prima(i) == 0) {
   
                          obj_daftar.value += i+', ';
   
                      }
   
                  }
   
              }
   
          }
   
      }
   
      function cek_prima(bil) {
   
          if (bil < 2) {
   
              return(1);
   
          }
   
          var i = 0;
   
          for (i=2; i<bil; i++) {
   
              if ((bil % i) == 0) {
   
                  return(i);
   
              }
   
          }
   
          return(0);
   
      }