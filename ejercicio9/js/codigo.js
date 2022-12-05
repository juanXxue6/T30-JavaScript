

function  validar(){
  let cadena = document.getElementById("texto").value;

  if(cadena.toUpperCase() == cadena){
    document.getElementById("cadena").innerHTML = "Cadena en mayusculas";
  }  else if(cadena.toLowerCase() == cadena){
    document.getElementById("cadena").innerHTML = "Cadena en minuscula";
  }else{
    document.getElementById("cadena").innerHTML = "Cadena con letras mixtas";
  }
}