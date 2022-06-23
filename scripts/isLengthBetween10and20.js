// Faça uma função chamada isLengthBetween10and20 que recebe um parâmetro chamado val do
// tipo string e retorna um boolean indicando se o comprimento da string é maior que 10 e menor que 20;

function isLengthBetween10and20(val) {

    // Está sendo utilizada a propriedade length que mede quantidades de caracteres e te
    //  retornar um número assim, retorna o parâmetro, com o operador &&, onde indica
    // que se o valor for maior que 10 ou menor que 20 o resultado será true;
    return (val.length > 10) && (val.length < 20);
}

// console.log(isLengthBetween10and20('testes'))
// console.log(isLengthBetween10and20('test-lower'))
// console.log(isLengthBetween10and20('teste-greater'))