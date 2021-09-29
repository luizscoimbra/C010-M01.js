console.log();
console.log("#############################");
console.log("#############################");
console.log("####### J O K E N P O #######");
console.log("#############################");
console.log("#############################");
console.log();

rodadas = prompt("Escolha a quantidade de rodadas: ");
console.log();
n = 0;
n = rodadas + 1;

while(n = rodadas){

resposta = prompt('Qual sua jogada, PEDRA, PAPEL ou TESOURA? ');
console.log();

const opcoes = {
  pedra: 1,
  papel: 2,
  tesoura: 3
}
const usuario = opcoes[resposta];
const maquina = Math.round(Math.random() * 2) + 1;

if (usuario === 1 && maquina === 3) {
    console.log('Parabéns, você ganhou!');
    console.log();
}else if (usuario === 1 && maquina === 2) {
    console.log('Que pena, escolha errada, você perdeu!');
    console.log();
}else if (usuario === 1 && maquina === 1) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    console.log();
}

if (usuario === 2 && maquina === 1) {
    console.log('Parabéns, você ganhou!');
   
}else if (usuario === 2 && maquina === 3) {
    console.log('Que pena, escolha errada, você perdeu!');
    
}else if (usuario === 2 && maquina === 2) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    
}

if (usuario === 3 && maquina === 2) {
    console.log('Parabéns, você ganhou!');
    
}else if (usuario === 3 && maquina === 1) {
    console.log('Você perdeu!Que pena, escolha errada, você perdeu!');
   
}else if (usuario === 3 && maquina === 3) {
    console.log('Parece que o computador advinhou sua ecolha, vocês empataram!');
    
}

console.log("Você escolheu "+resposta+"!!!");

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
