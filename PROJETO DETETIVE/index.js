console.log();
console.log("#############################");
console.log("#############################");
console.log("###### D E T E T I V E ######");
console.log("#############################");
console.log("#############################");
console.log();

q1 = prompt("Telefonou para vítima? ");
q2 = prompt("Esteve no local do crime? ");
q3 = prompt("Mora perto da vítima? ");
q4 = prompt("Devia para vítima? ");
q5 = prompt('Já trabalhou com a vítma? ');

cont = 0;

if (q1 === "SIM" || q2 ==="sim"){
  cont = cont + 1;
  }

if (q2 === "SIM" || q2 ==="sim"){
  cont = cont + 1;  
  }

if (q3 === "SIM" || q3 ==="sim"){
  cont = cont + 1;  
  }

if (q4 === "SIM" || q4 ==="sim"){
  cont = cont + 1;  
  }

if (q5 === "SIM" || q5 ==="sim"){
  cont = cont + 1;  
  }
console.log();
console.log("Você respondeu "+cont+" das [5] perguntas!");
console.log();

if (cont === 2) {
	console.log("Você é SUSPEITO!")
}else if (cont >= 3 && cont <= 4) {
    console.log("Você é CUMPLICE!");
}else if (cont === 5){
    console.log("Você é o ASSASSINO!");
}else if (cont === 0){
    console.log("Você é INOCENTE!");
}
console.log();
console.log("Parabéns, Investigação encerrada!");
console.log();
console.log("#################################");
console.log("# ALUNO: LUIZ ALBERTO COIMBRA   #");
console.log("# TURMA: C010 MOD:001           #");
console.log("# MODULO: LÓGICA DE PROGRAMAÇÃO #");
console.log("#################################");