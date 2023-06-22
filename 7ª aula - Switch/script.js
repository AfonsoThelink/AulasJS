let fruta = document.getElementById("frutinha")
let resultado = document.getElementById("resultado")
function apertar()
{
    switch (fruta.value) {
        case "banana":
            resultado.innerHTML = "Bananinha"
            break;
        case "maçã":
            resultado.innerHTML = "maçãnzinha"
            break;
        case "uva":
            resultado.innerHTML = "uvinha"
            break;
            case "cereja":
                resultado.innerHTML = "cerejinha"
            break;
        default: "manga"
            resultado.innerHTML = "Não existe essa fruta no sistema"
            break;
    }
}