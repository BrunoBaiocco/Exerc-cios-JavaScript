// Faça uma função chamada invertSign que recebe um parâmetro chamado val do tipo number
// e retorna um number que é o próprio parâmetro com o sinal de positivo/negativo invertido;

function invertSign(val) {

    // A função está retornando um -val que sera avaliado com -0, ou seja
    // será um valor falso, ou seja todos valores retornaram invertidos portanto o || operador
    // irá avaliar para o segundo operando, que é 0, e assim o -0 será substituído por 0;
    return -val || 0;
}

// console.log(invertSign(1));
// console.log(invertSign(-2));
// console.log(invertSign(0));