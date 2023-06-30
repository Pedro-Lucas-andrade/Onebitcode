function somar(a, b){
    return a + b;
};

let operacao = somar;
//console.log(operacao(7, 3));

/*Uma função anonima é uma função não nomeada atribuida a uma variável */

const subtracao = function (a, b){
    return a - b;
};
//console.log(subtracao(8, 5));

operacao = function (a, b){
    return a - b;
};
//console.log(operacao(7, 3));

console.log(olaMundo());
//console.log(oiMundo());
//Em uma função anonima não podemos chamala antes de sua definição.

function olaMundo(){
    return 'Olá mundo'
};

const oiMundo = function(){
    console.log('Oi mundo')
}();

