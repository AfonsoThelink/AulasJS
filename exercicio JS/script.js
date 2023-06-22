let altura = document.getElementById('altura')
let base = document.getElementById('largura')
let resultado = document.getElementById('resultado')
let botão = document.getElementById('btn')
botão.addEventListener('click', apertar)
function apertar(){
    resultado.innerHTML=(parseInt(altura.value) * parseInt(base.value))/2
}