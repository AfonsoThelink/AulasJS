let nick = document.getElementById("Nomedojogador")
let resposta = document.getElementById("resposta")

function enviarnome()
{
    if(nick.value == 0){
        alert("insira seu nome")
    }else{  
        resposta.innerHTML = "olá, " + nick.value + ". vamos jogar!"
    }
    
}