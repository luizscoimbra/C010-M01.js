// Exercicio 1

// Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".

console.log("O primeiro programa a gente nunca esquece!");

// Exercicio 2

// Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

let nome = prompt("Digite seu nome completo: ");
let endereco = prompt("Digite seu endereço: ");
let cep = prompt("Digite seu CEP: ");
let fone = prompt("Digite seu telefone: ");

console.log(nome);
console.log(endereco + cep);
console.log(fone);

//Exercicio 3

// Letra de música - Faça um programa que mostre na tela uma
// letra de música que você gosta (proibido letras do Justin Bieber).

let musica = "Se alguém passar por ela Fique em silêncio, não aponte o dedo Não julgue tão cedo Ela tem motivos pra estar desse jeito Isso é preconceito";

console.log(musica);

//Execercicio 4

// Tabela de notas - Você foi contratado ou contratada por uma
// escola para fazer o sistema de boletim dos alunos.
// Como primeiro passo, escreva um programa que produza a seguinte saída:

console.log("ALUNO(A)  NOTA");
console.log("========  ====");
console.log("ALINE     9.0");
console.log("MÁRIO     DEZ");
console.log("SÉRGIO    4.5");
console.log("SHIRLEY   7.0");

//Exercicio 5

// Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

console.log('Cadastro de Clientes');
console.log('0 – Fim');
console.log('1 - Inclui');
console.log('2 - Altera');
console.log('3 - Exclui');
console.log('Consulta');

let opcao = +prompt('Digite uma opção: ');

console.lgo("Você escolheu a opção: "+ opcao);

//Exercicio 6

// Calculadora de Dano - Escreva um programa que receba dois
// valores digitados pelo usuário:


//Execercicio 7

// E os 10% do garçom?
// • Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// • Defina uma variável para o valor da taxa de serviço que é de 10%;
// • Defina uma variável que calcula o valor total da conta e exiba-o no
// console com essa formatação: R$ 9999.99.

var refeicao = +prompt("Digite o valor da refeição: ");

comissao = refeicao * 10/100;
comissao = parseFloat(comissao.toFixed(2));
total = comissao + refeicao;
console.log("Valor da comissão é: R$ " + comissao);
console.log("Valor total é de R$ " + total);

//Execercicio 8

// Qual o valor do troco?
// • Defina uma variável para o valor de uma compra que custou R$100,98;
// • Defina uma variável para o valor que o cliente pagou R$150,00;
// • Defina uma variável que calcula o valor do troco e exiba-o no console
// com o valor final arredondado.

var totCompra = +prompt("Digite o valor total da compra. R$ ");
var vlrPago = +prompt("Digite o valor pago. R$ ");

troco = totCompra - vlrPago;
console.log("Troco R$ " + troco.toFixed(1));

//Exercicio 9

// Você está na flor da idade?
// • Defina uma variável para o valor do ano do nascimento;
// • Defina uma variável para o valor do ano atual;
// • Defina uma variável que calcula o valor final da idade da pessoa;
// • Exiba uma mensagem final dizendo a idade da pessoa e a mensagem
// "Você está na flor da idade".

let ano = +prompt('Digite o ano do seu nascimento: ');
let anoAtual = +prompt("Digite o ano atual: ");

console.log("Você tem " + (anoAtual-ano) + " de idade. Você esta na flor da idade!");

//Exercicio 10

// Conversor de moedas
// Crie um programa que solicite um um valor em real ao usuário e converta esse
// valor, para:
// • DOLAR
// • EURO
// • LIBRA ESTERLINA
// • DÓLAR CANADENSE
// • PESO ARGENTINO
// • PESO CHILENO

let valor = +prompt("Digite o valor para conversão: R$");
totdolar = valor / 5.27;
totdolar = parseFloat(totdolar.toFixed(2));

toteuro = valor / 6.18;
toteuro = parseFloat(toteuro.toFixed(2));

totlibra = valor / 7.21;
totlibra = parseFloat(totlibra.toFixed(2));

totdolarcan = valor / 4.12;
totdolarcan = parseFloat(totdolarcan.toFixed(2));

totpesoarg = valor / 0.054;
totpesoarg = parseFloat(totpesoarg.toFixed(2));

totpesochil = valor / 0.0067;
totpesochil = parseFloat(totpesochil.toFixed(2));

console.log("Valor em dolar é $: " + totdolar);
console.log("Valor em euro é $: " + toteuro);
console.log("Valor em libra é $: " + totlibra);
console.log("Valor em dolcar Canadense é $: " + totdolarcan);
console.log("Valor em peso Argentino é $: " + totpesoarg);
console.log("Valor em peso Chileno é $: " + totpesochil);

//Exercicio 11

// Calculadora de aumento de aluguel - Parte 1
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado
// no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99
// Exemplo:
// Valor do aluguel = 1000
// Valor do aluguel reajustado = R$ 1310,00

let aluguel = +prompt("Digite o valor do aluguel. R$ ");

valorreajust = aluguel / 100*31;
valorreajust = parseFloat(valorreajust.toFixed(2));
valortotal = aluguel+valorreajust;
valortotal = parseFloat(valortotal.toFixed(2));

console.log("Valor com reajustdo é de R$ " + valortotal);









