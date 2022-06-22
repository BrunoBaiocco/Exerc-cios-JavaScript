// Faça uma função chamada isBoolean que recebe um
// parâmetro chamado val e retorna um boolean
// indicando se o parâmetro é do tipo boolean;

function isBoolean(val) {

    // A função está retornando com o operador type of, onde o mesmo
    // verfica qual é o tipo do objeto que está situado, assim
    // se o parâmetro for do tipo boolean, retornará true ;
    return typeof val === 'boolean';
}

// console.log(isBoolean(true));
// console.log(isBoolean(false));
// console.log(isBoolean(1));
// console.log(isBoolean(null));