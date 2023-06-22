let idade = document.getElementById("idade")
let salario = document.getElementById("salario")
let nome = document.getElementById("nome")
function apertar(){
    if (idade.value >=5 && salario >= 3000){
        alert(nome.value + " " + "Você devera pagar mais imposto")
    }else{
        alert(nome.value + " " + "Você não pagara imposto")
    }
}