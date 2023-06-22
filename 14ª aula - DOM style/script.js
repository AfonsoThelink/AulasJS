let titulo = document.getElementById('titulo')
titulo.style.textAlign = 'center'
titulo.style.backgroundColor = 'grey'
titulo.style.borderBottom = 'solid 3px black'
titulo.style.margin = '20px'
titulo.innerHTML = 'Olá meus queridos alunos S2'

let item = document.getElementsByClassName('item')
let list = document.getElementsByClassName('list')
console.log(item)
console.log(list)
item[1].innerHTML = 'Olá'
item[1].style.backgroundColor = 'yellow'
item[1].style.listStyleType = 'none'