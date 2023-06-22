let x = document.getElementById("primeironumero")
let Y = document.getElementById("segundonumero")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")
function apertar()
{
    switch (sinal.value) {
        case "+":
            resultado.innerHTML = parseInt(x.value)+parseInt(y.value)
            break;
        case "-":
            resultado.innerHTML = parseInt(x.value)-parseInt(y.value)
            break;
        case "*":
            resultado.innerHTML = parseInt(x.value)*parseInt(y.value)
            break;
        case "/":
            resultado.innerHTML = parseInt(x.value)/parseInt(y.value)
            break;
    
        default:
            resultado.innerHTML = "numero invalido"
            break;
    }
}