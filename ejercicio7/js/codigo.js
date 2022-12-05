

function  factorial(){
  var resultado = 1;
  let factorialNum = document.getElementById("factorial").value;


  for (let index = factorialNum; index > 0; index--) {
    resultado *= index;
    
  }

console.log(resultado)

}