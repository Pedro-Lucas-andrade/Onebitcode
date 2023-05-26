/*73) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:*/
let cont = []
for (let i = 0; i <= 9; i++){
    cont[i] = 9 - i;
}
console.log(cont);