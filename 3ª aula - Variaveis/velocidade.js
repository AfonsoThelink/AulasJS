let velocidade = document.getElementById("Velocidade")
let resultado = document.getElementById("resultadoo")

function multa(){
    if(velocidade.value > 80 ){
        var subtração = velocidade.value - 80
        var mult = subtração * 5
        resultado.innerHTML = ("você foi multado por   ") + "R$ " + mult
    }else{
        resultado.innerHTML = ("você não foi multado ") 
    }
}