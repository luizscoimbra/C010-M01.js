console.log();
console.log("#############################");
console.log("#############################");
console.log("####### D I C E  GAME #######");
console.log("#############################");
console.log("#############################");
console.log();

let rodadas = prompt("DIGITE O NUMERO DE RODADAS: ");
let pergunta = prompt("DESEJA INICIAR O JOGO? [SIM] ou [NAO] ");

console.log();  
console.log("VOCE ESCOLHEU JOGAR "+rodadas+" VEZES!");
console.log();

//Armazena quantidade vitorias dos jogadores.

var contJogador1 = 0;
var contJogador2 = 0;

//Laço de repetição 

for (let i = 0; pergunta == "SIM" || pergunta == "sim"; i++)
{
for (let i = 1; i <= rodadas; i++)
{

//Função Math.random realiza sortei das opções de foram aleatória.
const player1 = Math.round(Math.random() * 6) + 1;
const player2 = Math.round(Math.random() * 6) + 1;

//Inicia lógica do jogo.
//Primeira possibilidade.

if (player1 === player2) 
    {
    console.log('Deu empate!');
    console.log("Dado Player 1 caiu com ["+player1+"]pontos.");
    console.log("Dado Player 2 caiu com ["+player2+"]pontos.");
    console.log();
    
    }
    else if (player1 < player2) 
    {
    console.log('Jogador 2 ganhou!');
    console.log("Dado Player 1 caiu com ["+player1+"]pontos.");
    console.log("Dado Player 2 caiu com ["+player2+"]pontos.");
    console.log();
    contJogador2++;
    }
    else if (player1 > player2) {
    console.log('Jogador 1 ganhou!');
    console.log("Dado Player 1 caiu com ["+player1+"]pontos.");
    console.log("Dado Player 2 caiu com ["+player2+"]pontos.");
    console.log();
    contJogador1++;
    }

  }
console.log("Jogador 1 venceu ["+contJogador1+"] rodadas!");
console.log("Jogador 2 venceu ["+contJogador2+"] rodadas!");
console.log();
if (contJogador1 === contJogador2) 
    {
    console.log('Player 1 e Player 2 empataram!');
    console.log();
    
    }
    else if (contJogador1 < contJogador2) 
    {
    console.log('Jogador 2 ganhou!');
    console.log();
    contJogador2++;
    }
    else if (contJogador1 > contJogador2) {
    console.log('Jogador 1 ganhou!');
    console.log();
    contJogador1++;
    }

pergunta = prompt("DESEJA CONTNUAR O JOGO? [SIM] ou [NÃO] ");
console.log();
console.log();
}
console.log();
console.log("#################################");
console.log("# ALUNO: LUIZ ALBERTO COIMBRA   #");
console.log("# TURMA: C010 MOD:001           #");
console.log("# MODULO: LÓGICA DE PROGRAMAÇÃO #");
console.log("#################################");