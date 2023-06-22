/*function mult(a,b)
{   
    return a*b
}*/
let mult = (a,b) =>
{
    return a*b
}

//sintaxe da função é definida com a function palavra-chave, seguida por um nome, seguida por parênteses().
//quando o JavaScript atinge uma retun instruções, a função para de ser executada.
//se a função foi invocada a partir de uma instrução, o JavaScript "retornara" para o executar o código após instrução invocada.
/*
let celsius = document.getElementById("graus")
let resultado = document.getElementById("resultado")

function tocelsius(){
    return resultado.innerHTML = (celsius.value*1.8) + 32
}
*/
//Crie uma função no qual utilize parametros para descobrir se um valor e par ou impar
/*
let Numero = document.getElementById("N1")
let resultado = document.getElementById("resultado")
function parouimpar(q){
    if(q %2==0){
     return console.log("par")
 
    }else{
     return  console.log("impar")
    }
 }*/
/*
function parouimpar(Numero){
    if(Numero%2==0){
        resultado.innerHTML="seu numero é par"
    }else{
        resultado.innerHTML="seu numero é impar"
    }
}
*/
//escreva uma função que retorne o maior de dois números
/*
function maiorque(w,e)
{
    if(w>e==true){
        return console.log("seu numero e maior que "+ e)
    }else{
        return console.log("seu numero é menor que "+ e)
    }
}*/
const maiorque = (w,e) => {w>e? console.log(w) : console.log(e)}

