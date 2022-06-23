// Faça uma função chamada isLengthGreaterThan5 que recebe um parâmetro chamado val 
// do tipo string e retorna um boolean indicando se o comprimento da string é maior que 5;

function isLengthGreaterThan5(val) {

// Está sendo utilizada a propriedade length que mede quantidades de caracteres e te
//  retornar um número, aí está sendo feita uma condicional if/else para testar esse valor e se ele for maior que 5 retornará true
    if (val.length > 5) {
        return true
    } else {
        return false
    }
};

// console.log(isLengthGreaterThan5('testes'))
// console.log(isLengthGreaterThan5('teste'))
// console.log(isLengthGreaterThan5('ok'))