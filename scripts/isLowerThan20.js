// Faça uma função chamada isLowerThan20 que recebe um parâmetro chamado val 
// do tipo number e retorna um boolean indicando se o número é menor que 20;

function isLowerThan20(val) {
    // foi ultizado a condicional if, onde ela indica
    // que se o valor foi menor que 20 retornará true;
    if (val < 20) {
        return true;

        // Foi utilizada a condicional else, onde ela indica que
        // se o valor por menor ou igual a 20, retornará false;
    } else {
        return false;
    }

}

// console.log(isLowerThan20(15));
// console.log(isLowerThan20(25));
// console.log(isLowerThan20(20));