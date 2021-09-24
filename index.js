// AULA 04 - CODELAB 
// DESAFIO 01 
// Reajuste salarial 
// As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e  lhe contrataram para desenvolver o programa que calculará os reajustes. 
// Faça um programa que recebe o salário de um colaborador e que calcula o reajuste  baseado no salário atual, seguindo os seguintes critérios: 
// • salários até R$ 280,00 (incluindo): aumento de 20% 
// • salários entre R$ 280,00 e R$ 700,00: aumento de 15% 
// • salários entre R$ 700,00 e R$ 1500,00: aumento de 10% 
// • salários de R$ 1500,00 em diante: aumento de 5% 
// Após o aumento ser realizado, informe na tela: 
// • o salário antes do reajuste; 
// • o percentual de aumento aplicado; 
// • o valor do aumento; 
// • o novo salário, após o aumento. 

let salario = +prompt("Digite o valor do salario: ");
console.log(typeof salario);

if (salario < 280){
    console.log("Seu salário atual é de R$ " + salario);
    console.log("Salário terá um acrescimo de 20%");
    console.log("Salário será acrescido o valor de R$ "+salario*0.2);
    
}else if (salario >= 280 && salario < 700){
    console.log("Seu salário atual é de R$ " + salario);
    console.log("Salário terá um acrescimo de 15%");
    console.log("Salário será acrescido o valor de R$ "+salario*0.15);

}else if (salario >= 700 && salario < 1500){
    console.log("Seu salário atual é de R$ " + salario);
    console.log("Salário terá um acrescimo de 10%");
    console.log("Salário será acrescido o valor de R$ "+salario*0.10);

}else if(salario >= 1500){
    console.log("Seu salário atual é de R$ " + salario);
    console.log("Salário terá um acrescimo de 5%");
    console.log("Salário será acrescido o valor de R$ "+salario*0.05);
}

