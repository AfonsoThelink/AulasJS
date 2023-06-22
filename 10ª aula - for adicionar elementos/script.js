let item = document.getElementById("item")

function adicionar(){
//criar elemento
let p = document.createElement("li")
//criar conteudo
let texto = document.createTextNode(item.value)
//adicionar um texto no elemento
p.appendChild (texto)
//adicionar no body
document.getElementById("lista").appendChild (p)
}