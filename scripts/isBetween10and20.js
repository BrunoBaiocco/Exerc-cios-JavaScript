// Faça uma função chamada isBetween10and20 que recebe um parâmetro chamado val
// do tipo number e retorna um boolean indicando se o número é maior que 10 e menor que 20;


function isBetween10and20(val) {
    // foi ultizado a condicional if, onde ela indica
    // se o valor é maior que 10 e menor que 20, retornando
    // true ou false dependendo do valor;
    if ((val > 10) && (val < 20)) {
        return true;
    } else {
        return false;
    }
}

// console.log(isBetween10and20(15));
// console.log(isBetween10and20(05));
// console.log(isBetween10and20(20));
// console.log(isBetween10and20(25));