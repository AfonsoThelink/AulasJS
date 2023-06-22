let x = document.getElementById("ValorInicial")
let y = document.getElementById("valorFinal")
function apertar(){
    while (x.value <= parseInt(y.value))
    {
        //criamos elemento p
        let paragrafo = document.createElement("p")
        //adicionamos texto
        let texto = document.createTextNode(x.value)
        
        paragrafo.appendChild(texto)
        //adcionar no body
        document.getElementById("contar").appendChild(paragrafo)
        
        console.log(x)
        x.value++
    }
}