// EXERCÍCIO 01
// Considere a string A = "Os limites só existem se você os deixar existir.(goku)".
// Que fatia corresponde a (goku)?

// let fatia = "Os limites só existem se você os deixar existir.(goku)";
// let fatiaSelecionada = fatia.slice(49,53);

// console.log(fatiaSelecionada);

// EXERCÍCIO 02
// Escreva um programa que solicite uma frase ao usuário e escreva a frase toda
// em maiúscula e sem espaços em branco.

// let frase = prompt("Escreva uma frase: ");

// console.log(frase.toUpperCase().replace(/ /g, '')); //Execução mais rapida em todos os navegadores.

// EXERCÍCIO 03
// Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada
// uma das informações da seguinte forma:

// // Nome -> Letra maiúscula
// // Endereço -> Letra minúscula
// // Hobby -> Primeira letra maiúscula

// let nome = prompt("Digite seu nome: ",);
// let endereco = prompt("Digite seu endereço: ");
// let hobby = prompt("Digite seu Hobby: ");

// let capitalized = nome[0].toUpperCase() + str.substr(1);
// console.log(capitalized);

// console.log(nome);
// console.log(endereco);
// console.log(hobby);

// EXERCÍCIO 04
// Faça um programa que pergunte ao usuário um número e valide se o número é
// par ou ímpar:
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

// var n = prompt("Digite um numero");
// var total = n/2;

// if(n & 1){
//     console.log("Impar");
// } else {
//     console.log("Par");
// }

// console.log(total);

// EXERCÍCIO 05
// Parte 1
// Faça um script que peça um valor e mostre na tela se o valor é positivo ou
// negativo.

// Parte 2
// Agora implemente a funcionalidade de não aceitar o número 0, no input.

// let numero = prompt("Digite um numero: ");

// if (numero>0){
//   console.log("Numero positivo");
// }else{
//   console.log("Numero negativo");
// }

// EXERCÍCIO 06
// Faça um programa que peça dois números, imprima o maior deles ou imprima
// "Números iguais" se os números forem iguais.

// let n1 = prompt("Digite o primeiro numero: ");
// let n2 = prompt("Digite o segundo numero: ");

// console.log(Math.max(n1,n2));

// EXERCÍCIO 07
// Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a
// letra, exiba:
// F – Feminino ou M – Masculino
// Caso escreva outra letra:
// Sexo Inválido.

// let fm = prompt("Digite M ou F: ");

// if (fm == m){
//   console.log("MASCULINO");
// }else {
//   console.log("FEMININO");
// }

// EXERCÍCIO 08
// Crie um programa em JavaScript que peça a nota do aluno, que deve ser um
// number entre 0.00 e 10.0
// • Se a nota for menor que 6.0, deve exibir a nota F.
// • Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// • Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// • Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

let nota = prompt("Digite a nota entre 0.00 e 10.0:");

if (nota < 6) {
	console.log("Nota F")
}else if (nota >= 6 && nota <= 7) {
    console.log("Nota D");
}else if (nota >7 && nota <=8){
    console.log("Nota C");
}else if (nota >8 && nota <9){
    console.log("Nota B");
}else if (nota >=9 && nota <=10){
    console.log("Nota A");
}
