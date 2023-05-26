/*76) Crie um programa que preencha automaticamente um vetor numérico com 7
números gerados aleatoriamente pelo computador e depois mostre os valores
gerados na tela.*/

let arr = [];
let lucas;
for ( let i = 0; i <= 6; i++){
    arr[i] = Math.floor(Math.random()*100);
}
console.log(arr)