// Faça uma função chamada booleanResponse que recebe um
// parâmetro chamado val do tipo boolean e retorna uma string
// com valor sim para true e não para false;


function booleanResponse(val) {

    // Está retornando uma string, com o operador ternário, que
    // está indicando que se a função for true, irá retornar o primeiro
    // valor que é 'sim', se a função for false, irá retornar o segundo valor que é 'não';

    return val == true ? 'sim' : 'não';
}

// console.log(booleanResponse(true));
// console.log(booleanResponse(false));