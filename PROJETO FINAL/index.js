//Function para incrementar horas e minutos ao avançar a rotina.
function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}
function formatDate(date) {
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${h}:${mi}:${s}`;
}
// ISO 8601
// 20/04/2019 10:00:00
const stringDate = '2019-04-20T06:00';
const date = new Date(stringDate);
date.setHours(date.getHours() + 0) //Incrementa Horas
date.setMinutes(date.getMinutes() + 0)//Incrementa Minutos

console.log("Horario de início "+formatDate(date));

//Inicio do jogo
console.log("Olá! Seja bem vindo ao IF do BOB, agora você ajudará o BOB a tomar as decisões durante o seu dia. Contamos com sua ajuda, será divertido!");
console.log();

let pergunta = prompt("Vamos começar? [SIM] ou [NAO]");

//Repetição até que o usuario resolva mudar de ideia e digitar SIM para seguir o jogo.

for (let i = 0; pergunta == "NAO" || pergunta == "nao"; i++)
{
console.log();
//>>>>>>> PRIMEIRA ROTA 06:00 <<<<<<<<<<<<
if (pergunta === "SIM"||pergunta ==="sim")
  {
  console.log("# Ficamos contentes que deseja começar jogar. A partir de agora você decidirá os passos que BOB terá que tomar.");
  console.log(); 
  }
else
  {
  console.log("É uma pena que não queira continuar, mais espero que volte logo para jogar um pouco!");
  }
  console.log();
  pergunta = prompt("# Deseja mudar de ideia? ");
  console.log();
}
q1 = prompt("# Deseja acordar as 06:00 ou as 07:00? [0] ou [00:00]");
if (q1 === "6"||q1 === "06:00") 
    {
    console.log();
    console.log('>>> Parabéns, você escolheu levantar as 06:00! <<<');
    date.setMinutes(date.getMinutes() + 5);
    console.log("Agora são "+formatDate(date));
    console.log();
    
q2 = prompt("# Deseja tomar um banho e um bom café? [SIM] ou [NAO]");   
if (q2 === "SIM"||q2 ==="sim")
    {
    console.log();
    console.log(">>> Nada melhor que um bom banho e um café fresco para despertar! <<<");
    date.setMinutes(date.getMinutes() + 55);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log();
    console.log(">>> Já que vai com essa cara amarrotada mesmo, então vá se arrumar, a van já esta a caminho! <<<");
    date.setMinutes(date.getMinutes() + 60);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
q3 = prompt("# A van acaba de chegar! Esta pronto? [SIM] ou [NAO]");
if (q3 === "SIM"||q3 === "sim")
    {
    console.log();
    console.log(">>> Vamos então, o dia só esta começando! <<<");
    date.setMinutes(date.getMinutes() + 10);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log();
    console.log(">>> Infelizmente a van não poderá esperar! Você perderá a aula hoje! Fim de jogo! <<<");
    date.setMinutes(date.getMinutes() + 10);
    console.log("Agora são "+formatDate(date));
    console.log();
    
    }
q4 = prompt("# Sua aula já esta começando! Deseja assistir a aula? [SIM] ou [NAO]");
if (q4 === "SIM"|| q4 === "sim")
    {
    console.log();
    console.log(">>>Boa aula! Nos veremos mais tarde! <<<");
    date.setMinutes(date.getMinutes() + 60);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log();
    console.log(`>>> Matar aula não é uma boa! Vai precisar pegar carona para voltar pra casa!
    Como castigo você não irá almoçar e ficará em seu quarto sem poder sair até amanha! <<<`);
    date.setMinutes(date.getMinutes() + 60);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
q5 = prompt("# Sua aula acabou! Podemos ir? [SIM] ou [NAO] ");
if (q5 === "SIM"|| q5 === "sim")
    {
    console.log();
    console.log(">>> Partiu casa! Partiu encher a barriga e descansar! <<<");
    date.setMinutes(date.getMinutes() + 240);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log(">>>Que pena, a van não poderá esperar, peça um UBER! Adeus!");
    date.setMinutes(date.getMinutes() + 250);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
  q6 = prompt("Agora que já almoçou, é hora de descansar um pouco! [SIM] ou [NAO]");
  if (q6 === 'SIM'||q6 === "sim")
  {
    console.log();
    console.log("Nada melhor que uma soneca após o almoço!");
    date.setMinutes(date.getMinutes() + 180);
    console.log("Agora são "+formatDate(date));
    console.log();
  }
  q7 = prompt("Agora que esta descansado é hora de fazer os exercícios de casa! [SIM] ou [NAO]");
  if (q7 === "SIM"||q7 === "sim")
  {
  console.log();
  console.log("Parabéns! Continue assim e se sairá muito bem com suas avaliações! Agora é hora de ir para cama porque amanha tem mais....ZZZZZZ");
  date.setMinutes(date.getMinutes() + 180);
  console.log("Agora são "+formatDate(date));
  console.log();
  }
}

//>>>>>>>>> SEGUNDA ROTA 07:00 <<<<<<<
else
{
  console.log(); 
  console.log('>>> Ainda esta cansado? Precisa dormir mais cedo! <<<');
  date.setMinutes(date.getMinutes() + 65);
  console.log("Agora são "+formatDate(date));
  console.log();
 
q6 = prompt("A van já chegou deseja se arrumar? [SIM] ou [NAO] ");
if (q6 === "SIM" || q6 === "sim")
    {
    console.log();
    console.log("# Não demore, a van esta te esperando!");
    date.setMinutes(date.getMinutes() + 10);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log(">>> Tente dormr mais cedo para não perder a VAN! <<<");
    date.setMinutes(date.getMinutes() + 10);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
        
q8 = prompt("# Sua aula já esta começando! Deseja assistir a aula? [SIM] ou [NAO] ");
if (q8 === "SIM"|| q8 === "sim")
    {
    console.log();
    console.log(">>>Boa aula! Nos veremos mais tarde! <<<");
    date.setMinutes(date.getMinutes() + 55);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log();
    console.log(`>>> Matar aula não é uma boa! Vai precisar pegar carona para voltar pra casa!
    Como castigo você não irá almoçar e ficará em seu quarto sem poder sair até amanha! <<<`);
    date.setMinutes(date.getMinutes() + 50);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
q9 = prompt("# Sua aula acabou! Podemos ir? [SIM] ou [NAO] ");
if (q9 === "SIM"|| q9 === "sim")
    {
    console.log();
    console.log(">>> Partiu casa! Partiu encher a barriga e descansar! <<<");
    date.setMinutes(date.getMinutes() + 230);
    console.log("Agora são "+formatDate(date));
    console.log();
    }
    else
    {
    console.log(">>>Que pena, a van não poderá esperar, peça um UBER! Adeus!");
    date.setMinutes(date.getMinutes() + 15);
    console.log("Agora são "+formatDate(date));
    console.log();  
    }
    q6 = prompt("E hora de descansar um pouco! [SIM] ou [NAO]");
  if (q6 === 'SIM'||q6 === "sim")
  {
    console.log();
    console.log("Nada melhor que uma soneca após o almoço!");
    date.setMinutes(date.getMinutes() + 180);
    console.log("Agora são "+formatDate(date));
    console.log();
  }
  q7 = prompt("Quer fazer os exercícios de casa! [SIM] ou [NAO] ");
  if (q7 === "SIM"||q7 === "sim")
  {
  console.log();
  console.log("Parabéns! Continue assim e se sairá muito bem com suas avaliações! Agora é hora de ir para cama porque amanha tem mais....ZZZZZZ");
  date.setMinutes(date.getMinutes() + 180);
  console.log("Agora são "+formatDate(date));
  console.log();
  }

}