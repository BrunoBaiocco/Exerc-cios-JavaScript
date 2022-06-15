// Faça uma função chamada isGreaterThan100AndMultipleOf3 que recebe um parâmetro chamado val do tipo number
// e retorna um boolean indicando se o numero é maior que 100 e também é um múltiplo de 3;

function isGreaterThan100AndMultipleOf3(val) {

    // Está retornando o parâmetro com o operador &&, onde o mesmo testa as duas
    // expressões, a primeira expressão indica que se o valor ser maior que 100 retornara true.
    // Já a segunda expressão foi colocado o operador ===
    // que indica que se o resultado for 0, o número será um multiplo de 3
    // ou seja com o operador === se o resultado for 0, o cálculo será perfeito e retornará true;
    return (val > 100) && (val % 3 === 0);

}

// console.log(isGreaterThan100AndMultipleOf3(300));
// console.log(isGreaterThan100AndMultipleOf3(306));
// console.log(isGreaterThan100AndMultipleOf3(030));
// console.log(isGreaterThan100AndMultipleOf3(036));