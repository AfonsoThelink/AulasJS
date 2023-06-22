let dia = document.getElementById("dia")
let resultado = document.getElementById("resultado")
function apertar()
{
switch (dia.value) {
    case "1":
        resultado.innerHTML = "domingo não é um dia util"
        break;
    case "2":
        resultado.innerHTML = "segunda não é um dia util"
        break;
    case "3":
        resultado.innerHTML = "terça não é um dia util"
        break;
    case "4":
        resultado.innerHTML = "quarta não é um dia util"
        break;
    case "5":
        resultado.innerHTML = "quinta não é um dia util"
        break;
    case "6":
        resultado.innerHTML = "sexta não é um dia util"
        break;
    case "7":
        resultado.innerHTML = "sabado não é um dia util"
        break;

    default:
        resultado.innerHTML = "esse não é um dia valido"
        break;
}
}