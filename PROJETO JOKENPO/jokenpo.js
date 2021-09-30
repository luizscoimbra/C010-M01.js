console.log();
console.log("#############################");
console.log("#############################");
console.log("####### J O K E N P O #######");
console.log("#############################");
console.log("#############################");
console.log();

let rodadas = prompt("DIGITE O NUMERO DE RODADAS: ");
let pergunta = prompt("DESEJA INICIAR O JOGO? [SIM] ou [NAO] ");

console.log();  
console.log("VOCE ESCOLHEU JOGAR "+rodadas+" VEZES!");
console.log();

//Armazena quantidade vitorias da maquina e do usuario.

var contUse = 0;
var contMaq = 0;

//Laço de repetição que permite usuario escolher quantas rodadas vai querer jogar na disputa.

for (let i = 0; pergunta == "SIM" || pergunta == "sim"; i++)
{
for (let i = 1; i <= rodadas; i++)
{resposta = prompt('Qual sua jogada, PEDRA, PAPEL ou TESOURA? ');
console.log();

//Variavel armazena resposta e referencia um número correspondente.

const opcoes = 
{
  pedra: 1,
  papel: 2,
  tesoura: 3
}

//Função Math.random realiza sortei das opções de foram aleatória.
const usuario = opcoes[resposta];
const maquina = Math.round(Math.random() * 2) + 1;

//Inicia lógica do jogo.
//Primeira possibilidade.

if (usuario === 1 && maquina === 3) 
    {
    console.log('Parabéns, você ganhou!');
    console.log();
    contUse++;
    }
    else if (usuario === 1 && maquina === 2) 
    {
    console.log('Que pena, escolha errada, você perdeu!');
    console.log();
    contMaq++;
    }
    else if (usuario === 1 && maquina === 1) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    console.log();
    }

//Segunda possibilidade.

if (usuario === 2 && maquina === 1) 
    {
    console.log('Parabéns, você ganhou!');
    contUse++;
    }
    else if (usuario === 2 && maquina === 3) 
    {
    console.log('Que pena, escolha errada, você perdeu!');
    contMaq++;
    }
    else if (usuario === 2 && maquina === 2) 
    {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    }

//Terceira possibilidade.

if (usuario === 3 && maquina === 2) 
    {
    console.log('Parabéns, você ganhou!');
    contUse++; 
    }
    else if (usuario === 3 && maquina === 1) 
    {
    console.log('Você perdeu!Que pena, escolha errada, você perdeu!');
    contMaq++;
    }
    else if (usuario === 3 && maquina === 3) 
    {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    }

console.log("Você escolheu "+resposta+"!!!");
console.log("VOCÊ VENCEU ["+contUse+"] VEZ(ES)!");
console.log("O COMPUTADOR VENCEU ["+contMaq+"] VEZ(ES)!");

//Apresenta as escolhas da maquina.

if (maquina === 1)
    {
    console.log("Maquina escolheu pedra!!!");
    console.log();
    }
if (maquina === 2)
    {
    console.log("Maquina escolheu papel!!!");
    console.log();
    }
if (maquina === 3)
    {
    console.log("Maquina escolheu tesoura!!!");
    console.log();
}
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
