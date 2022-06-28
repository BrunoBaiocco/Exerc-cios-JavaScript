// Faça uma função chamada isPositiveAndNegative que recebe dois parâmetros chamados val1 e val2
// do tipo number e retorna um boolean true caso um número for negativo e o outro positivo, não importa a ordem;


function isPositiveAndNegative(val1, val2) {

    // Está retornando os parâmetros, com o operador de diferença lógica, onde val1 é maior que 0 
    // e val 2 com o operador ele se torna um número negativo, pois o mesmo indica a diferença;

    return (val1 > 0) !== (val2 > 0);


}


// console.log(isPositiveAndNegative(-1, 2))
// console.log(isPositiveAndNegative(7, -5))
// console.log(isPositiveAndNegative(2, 5))
// console.log(isPositiveAndNegative(-5, -5))