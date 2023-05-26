/*74) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:*/
let arr = Array();
for ( let i = 0; i <= 9; i++){
    if ( i % 2 == 0){
        arr[i] = 5;
    } else{
        arr[i] = 3;
    }
}
console.log(arr);