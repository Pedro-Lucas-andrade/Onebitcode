function fatorial(num){
    if (num === 0){
        return 1;
    } else if ( num === 1){
        return 1;
    } else {
        return num*fatorial(num-1);
    };
};
//console.log(fatorial(5));

function dividir(num){
    console.log(num);
    if ( num % 2 == 0){
        dividir(num / 2);
    } else {
        return num;
    };
};

//dividir(18);

//Resolva a sequencia de fibonacci com função recursiva

function fibo(num){
    if( num == 0 || num == 1){
        return num;
    }else{
        return fibo(num-1) + fibo(num - 2);
    };
};

//fibo(15)
//seq(15)

function seq(num){
    for(let i = 0; i < num; i++){
        const number = fibo(i);
        console.log(number);
    };
};

//Calcular x elevado a n positivo.

function pot(x, n){
    if( n == 0){
        return 1;
    } else{
        return x*pot(x, n-1)
    }
};

//console.log(pot(5, 2))


