//Boolean = é true or false =operação logica
//null = variavel vazia
//undefined = não definido
//number = 1;
//string = "1";
 
//var a = " sajbdkshdaskj";

//console.log(a)

//opeaçoes Aritméticas

// + adição
// _ subtração
// * multiplicação
// / divisao
// % módulo
// ++ incremento
// -- decremento


//var a = 30;


//var b = a++;
//console.log (b);


//=   x = y  x=y
// += x += y x = x + y
// -= x-=y   x = x - y 
// *= x *= y x = x * y
// /= x /= y x = x / y
// %= x%= y x = x % 

//var idade = 71;

/*
if (idade < 18 || idade >70) {
  console.log("pode");
  console.log ("qual é o seu pedido?");

}
       
  else {
    console.log ("não pode");
    console.log ("volte futuramente");
  }
  
*/  

/* operador ternario

var idade = 19;
  
var pode = idade>=18 ? "pode" : "não pode";

console.log (pode)


*/

//condicionais switch


/*var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) / 2;

var conceito= ""

if (media >=8) {

  conceito = "ótimo";

}
else if (media >= 6.5) {
  conceito = "bom";

}
else {
  conceito = "mais ou menos"
}

console.log (media);
console.log (conceito);

switch (conceito) {
  case "ótimo":
    console.log ("parabens vc é um otimo aluno")

    break;

  case"bom" :
  console.log ("parabens vc é quase perfeito")

  break;
  
  case "regular" :
    console.log ('estude mais')

    break;

  default:
    console.log ("houve algum erro")
}

*/



var aluno = {
  nome: "igor"
  notas: [5, 8],

  media: function (n1, n2) {
      return (n1 + n2) / 2;
  }
     
  

}
 
console.lo(aluno.nome)


