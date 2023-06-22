/*no javascript, eventos são ações ou ocorrencia que acontecem na pagina web que estamos implementando. esses eventos geralmente invocam funções que irão executar as operações desejadas. aguns exempplos são: 
- quando um usuário clica no mouse;
- quando uma pagina da web é carregada;
- quando uma imagem foi carregada;
- quando o mouse passa sobre elemento;
- quando um usuario pressiona uma tecla;
*/
let titulo = document.getElementById("texto")
function Mudar(){
    titulo.innerHTML = 'São os alunos de Santo Amaro!'
}

let mostrar = document.getElementById('demo')
function apertar(){
    mostrar.innerHTML = Date();
}
