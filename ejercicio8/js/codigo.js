

function  validar(){
  let numero = document.getElementById("numero").value;

  if(numero % 2 == 0){
    document.getElementById("text").innerHTML = "El numero es par";
  }else{
    document.getElementById("text").innerHTML = "El numero es impar";
  }

}