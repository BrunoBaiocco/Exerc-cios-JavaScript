// Faça uma função chamada isNumber que recebe um parâmetro
// chamado val e retorna um boolean indicando se o parâmetro é do tipo number;



function isNumber(val) {
    // A função está retornando com o operador type of, onde o mesmo
    // verfica qual é o tipo do objeto que está situado, assim
    // se o parâmetro for do tipo number, retornará true ;
    return typeof val === 'number';

}



// console.log(isNumber(1));
// console.log(isNumber(0));
// console.log(isNumber(true));
// console.log(isNumber(null));
// console.log(isNumber('1'));