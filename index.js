console.log();
console.log("#############################");
console.log("#############################");
console.log("####### J O K E N P O #######");
console.log("#############################");
console.log("#############################");
console.log();

let rodadas = prompt("Digite o numero de rodadas: ");

console.log();  
console.log("VOCE ESCOLHEU JOGAR "+rodadas+" VEZES!");
console.log();

//Laço de repetição que permite usuario escolher quantas rodadas vai querer jogar na disputa.

for (let i = 1; i <= rodadas; i++)
{resposta = prompt('Qual sua jogada, PEDRA, PAPEL ou TESOURA? ');
console.log();

//Variavel armazena resposta e referencia um número correspondente.

const opcoes = {
  pedra: 1,
  papel: 2,
  tesoura: 3
}

//Função Math.random realiza sortei das opções de foram aleatória.
const usuario = opcoes[resposta];
const maquina = Math.round(Math.random() * 2) + 1;

//Armazena quantidade vitorias da maquina e do usuario.

contUse = 0;
contMaq = 0;

//Inicia lógica do jogo.

//Primeira possibilidade.

if (usuario === 1 && maquina === 3) {
    console.log('Parabéns, você ganhou!');
    console.log();
    contUse = contUse + 1;

}else if (usuario === 1 && maquina === 2) {
    console.log('Que pena, escolha errada, você perdeu!');
    console.log();
    contMaq = contMaq + 1;

}else if (usuario === 1 && maquina === 1) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    console.log();
}

//Segunda possibilidade.

if (usuario === 2 && maquina === 1) {
    console.log('Parabéns, você ganhou!');
    contUse = contUse + 1;

}else if (usuario === 2 && maquina === 3) {
    console.log('Que pena, escolha errada, você perdeu!');
    contMaq = contMaq + 1;

}else if (usuario === 2 && maquina === 2) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    
}

//Terceira possibilidade.

if (usuario === 3 && maquina === 2) {
    console.log('Parabéns, você ganhou!');
    contUse = contUse + 1; 

}else if (usuario === 3 && maquina === 1) {
    console.log('Você perdeu!Que pena, escolha errada, você perdeu!');
    contMaq = contMaq + 1;

}else if (usuario === 3 && maquina === 3) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    
}

console.log("Você escolheu "+resposta+"!!!");
console.log("Você venceu "+contUse+" vezes!");
console.log("O computador venceu "+contMaq+" vezes!");

//Apresenta as escolhas da maquina.

if (maquina === 1){
  console.log("Maquina escolheu pedra!!!");
  console.log();
}
if (maquina === 2){
  console.log("Maquina escolheu papel!!!");
  console.log();
}
if (maquina === 3){
  console.log("Maquina escolheu tesoura!!!");
  console.log();
}
}

console.log();
console.log("#################################");
console.log("# ALUNO: LUIZ ALBERTO COIMBRA   #");
console.log("# TURMA: C010 MOD:001           #");
console.log("# MODULO: LÓGICA DE PROGRAMAÇÃO #");
console.log("#################################");
