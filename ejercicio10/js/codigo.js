

function  validar(){
  let cadena = document.getElementById("texto").value;
  let cadenaInversa = cadena.split("").reverse().join("")

  if(cadena == cadenaInversa){
    document.getElementById("cadena").innerHTML = "Es palindromo";
  } else{
    document.getElementById("cadena").innerHTML = "No es palindromo";
  }
}