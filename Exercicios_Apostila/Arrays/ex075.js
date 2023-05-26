/*75) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
elementos da sequência de Fibonacci: */

let arr = [];
arr[0] = 1;
arr[1] = 1;

for (let i = 2; i <= 15; i++){
    arr[i] = arr[i-2] + arr[i-1]
}
console.log(arr)
