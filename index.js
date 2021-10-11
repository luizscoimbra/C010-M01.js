var pergunta = prompt("Deseja iniciar a votação? ");

candidato1 = 0;
candidato2 = 0;
candidato3 = 0;
votoNulo = 0;
votoBranco = 0;



for (var i = 0; pergunta == "SIM" || pergunta == "sim"; i++)
{
  //Calcula idade com base no ano atual - ano de nascimento.

var ano_informado = prompt("Digite o ano do seu nascimento: ");
console.log();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_informado;


//Vefiricação da obrigatoriedade do voto.

if (idade < 16)
{
   console.log("Voto NEGADO! Você tem apenas "+idade+" anos!");
   console.log();
   pergunta = prompt("Deseja continuar a votação? ");
}
  else if (idade >= 16 && idade <18)
  {
    console.log("Voto OPCIONAL! Você tem apenas "+idade+" anos!");
    opcao = prompt("Deseja votar mesmo assim? ");
    if (opcao == "sim" || opcao == "SIM"){
    var voto = +prompt( `Digite o número do seu candidato:     
     1 = Candidato 1 
     2 = Candidato 2
     3 = Candidato 3
     4 = Voto Nulo 
     5 = Voto em Branco`);  
     console.log();
     console.log("Você escolheu candidado "+voto+"."); 
     console.log();
     
     if (voto == 1){
        candidato1++;
      }

      if (voto == 2){
        candidato2++;
      }

      if (voto == 3){
        candidato3++;
      }

      if (voto == 4){
        votoNulo++;
      }

      if (voto == 5){
        votoBranco++;
      }
    }
  }
  else if (idade >= 18)
    {
    console.log("Voto OBRIGATÓRIO! Você tem "+idade+" anos!");
    console.log();
     var voto = +prompt( `Digite o número do seu candidato:     
     1 = Candidato 1 
     2 = Candidato 2
     3 = Candidato 3
     4 = Voto Nulo 
     5 = Voto em Branco`);  
     console.log();
     console.log("Você escolheu candidado "+voto+"."); 
     console.log();

      if (voto == 1){
        candidato1++;
      }

      if (voto == 2){
        candidato2++;
      }

      if (voto == 3){
        candidato3++;
      }

      if (voto == 4){
        votoNulo++;
      }

      if (voto == 5){
        votoBranco++;
      }
}       
    
pergunta = prompt("Deseja continuar a votação? ");

}
console.log();
console.log("Total votos candidato 1:... ["+candidato1+"].");
console.log("Total votos candidato 2:... ["+candidato2+"].");
console.log("Total votos candidato 3:... ["+candidato3+"].");
console.log("Total votos nulos:..........["+votoNulo+"].");
console.log("Total votos brancos:........["+votoBranco+"].");
console.log();
