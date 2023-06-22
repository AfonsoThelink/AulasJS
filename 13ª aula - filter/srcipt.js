//o metado filter() cria um novo array com o resultado do filtro aplicado pelo método, ou seja, os elementos que "passaram" na condição configurada no filtro.

const idades = [32,33,16,40];
let filtroidade = idades.filter(idade);
let receber = document.getElementById("demo")

receber.innerHTML = filtroidade

function idade(idades)
{
    return idades >= 18
}