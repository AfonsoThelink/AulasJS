//array unidimensional
//podemos criar ass
const num1 = new Array(30, -1,5,3,1210);

//ou podemos fazer;
const num2 = [-2,40,16,111,333,64];

console.log(num1)
console.log(num2)
console.log(`1º elemento: ${num1[0]}`)
console.log(num1[2])
console.log("2º elemento: "+ num2[2])

//descubra o terceiro elemento do num1
console.log("3º elemento: " + num1[2])

//e o quinto elemento do num2
console.log("5º elemento: " + num2[4])

//soma de dois numeros
console.log(num1[2]+num1[1])
console.clear();

//array bidimensionais
const matrix =[
    ['banana','maça','pera'],
    ['laranja', true ,1],
    [null, 'uva', -350],
]
console.log(matrix[1])
console.log(matrix[1][1])
console.clear()

let moedas = ['Real','Dólar','Coroa','Peso']
console.log(moedas)

moedas[1] = "Iene"
console.log(moedas)

let matrix2 = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matrix2);
console.log(matrix2);
matrix2[1][1] = 10;

//tamanho de arrays
console.clear()
let vetor = [0,1,2,3,4];
console.log(vetor.length)

//remover e insirir elementos
//pop() <- remover o ultimo item
console.clear()
const frutas = ['banana','laranja','maçã', 'manga'];
console.log(frutas)
frutas.pop()
console.log(frutas)

//shift () <- remove o primeiro item 
frutas.shift()
console.log(frutas)

//push(nome) ,- inserir no ultimo item um valor
frutas.push("goiaba")
console.log(frutas)

//unshift(nome) <- Inserir no primeiro item um valor
frutas.unshift('kiwi')
console.log(frutas)