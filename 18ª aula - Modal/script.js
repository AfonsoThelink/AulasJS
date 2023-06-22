let modal, btn, span
btn = document.getElementById("myBtn")
modal = document.getElementById("myModal")
span = document.getElementById("fechar")

btn.addEventListener('click', abrir)
function abrir()
{
    modal.style.display = "block"
}

span.addEventListener('click', fechar)
function fechar(){
    modal.style.display = "none"
}