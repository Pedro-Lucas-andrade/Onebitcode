/*41) Desenvolva um programa que mostre na tela a seguinte contagem:
100 95 90 85 80 ... 0 Acabou!*/

let i = 100;

while ( i >= 0){
    console.log(i);
    i -= 5;
}
console.log('Acabou!');