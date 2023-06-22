let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let aprovado = document.getElementById("resultado")
let gerarmedia;
function media() {
    gerarmedia=(parseInt(n1.value)+parseInt(n2.value)+parseInt(n3.value)+parseInt(n4.value))/4;
    if (gerarmedia >=7){
        aprovado.innerHTML = "A sua media foi  " + gerarmedia + "  " +
        "Você foi aprovado"
    }else {
        aprovado.innerHTML = "A sua media foi  " + gerarmedia + "  " +
        "Você foi raprovado"
    }
}
