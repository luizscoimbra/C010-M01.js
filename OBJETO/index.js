let cinema1 = {
  nome: 'O primeiro Homem',
  duracao: 141,
  ano: 2018,
  diretor: 'Damien Chazelle',
  atores: ['Neil Armstrong'],
}
let cinema2 = {
  nome: 'Infinito',
  duracao: 106,
  ano: 2021,
  diretor: 'Antoine Fuqua',
  atores: ['Todd Stein, Eric Maikranz']
}

console.log(cinema1);
console.log();
console.log(cinema2);
console.log();

cinema1.filme = function(){
  return `O filme ${this.nome}, com duração de ${this.duracao} minutos, lançado em ${this.ano}, com direção de ${this.diretor}, tendo com ator principal ${this.atores} é uma boa pedida para o fim de semana!`
}

console.log(cinema1.filme());
console.log();

cinema2.filme = function(){
  return `O filme ${this.nome}, com duração de ${this.duracao} minutos, lançado em ${this.ano}, com direção de ${this.diretor}, tendo com ator principal ${this.atores} é uma boa pedida para o fim de semana!`
}

console.log(cinema2.filme());