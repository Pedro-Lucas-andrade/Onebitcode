/*Uma high order function é uma função onde é passado por parametro outra função ou então ela retorna uma função */

function calcular(a, b, operacao){
    console.log('Realizando operação...');
    const result = operacao(a, b);
    return result;
}

function somar(x, y){
    console.log('Realizando soma...');
    return x + y;
}

//console.log(calcular(5, 2, somar));

/*console.log(calcular(5, 2, function (x, y){
    console.log('Realizando subtração');
    return x - y;
}))*/

function exibirElementos(elemento, indice, array){
    console.log({
    elemento,
    indice,
    array
    });
}

const list = ['maça', 'uva', 'limão', 'banana'];

for( let i = 0; i < list.length; i++){
    exibirElementos(list[i], i, list)
};

//forEach é uma high order function, e faz o mesmo que o código acima
list.forEach(exibirElementos);