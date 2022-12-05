var caracteres = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

function  dniValidator(){
  let dni = document.getElementById("dni").value;
if(dni.length == 9){

var letradni = dni.substring(8, 9).toUpperCase();
var numerodni = parseInt(dni.substring(0, 8));

console.log(numerodni)
if(numerodni >99999999 || numerodni < 0 ){

  alert("El dni introducido no es valido");

  }else{
    var index = numerodni % 23;
    if(caracteres[index] == letradni){
      alert("DNI valido")
    }else{
      alert("DNI invalido")
    }

    
  }
  }else{
    alert("dni no valido")
  }

}