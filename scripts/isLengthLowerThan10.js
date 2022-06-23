// Faça uma função chamada isLengthLowerThan10 que recebe um parâmetro chamado val do 
// tipo string e retorna um boolean indicando se o comprimento da string é menor que 10;

function isLengthLowerThan10(val) {

// Está sendo utilizada a propriedade length que mede quantidades de caracteres e te
//  retornar um número, aí está sendo feita uma condicional if/else para testar esse valor e se ele for menor que 10 retornará true
    if (val.length < 10) {
        return true
    } else {
        return false
    }
};


// console.log(isLengthLowerThan10('test'));
// console.log(isLengthLowerThan10('test-lower'));
// console.log(isLengthLowerThan10('test-greater'));