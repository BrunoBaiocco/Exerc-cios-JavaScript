// Faça uma função chamada isString que recebe um parâmetro chamado
//  val e retorna um boolean indicando se o parâmetro é do tipo string;


function isString(val) {

    // A função está sendo retornada com o operador type of, onde o mesmo
    // verfica qual é o tipo do objeto que está situado, assim se o parâmetro for do tipo string, retornará true;

    return typeof val === 'string';

}

// console.log(isString('teste'));
// console.log(isString('1'));
// console.log(isString(1));
// console.log(isString(true));
// console.log(isString(null));