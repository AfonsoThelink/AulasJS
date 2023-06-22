let menu = document.getElementById("mySidebar")
let conteudo = document.getElementById("main")

function opennav(){
 menu.style.width = '250px'
 conteudo.style.marginLeft = '250px'
}function closenav(){
    menu.style.width = '0'
    conteudo.style.marginLeft = '0'
}