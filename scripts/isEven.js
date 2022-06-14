// Faça uma função chamada isEven que recebe um parâmetro chamado val
//  do tipo number e retorna um boolean indicando se o parâmetro é par;

function isEven(val) {
    // Foi utilizada a condicional if, onde ela indica que
    // se o parâmetro for par, ela retornará true;
    if (val % 2 == 0) {
        return true;

        // Foi utilizada a condicional else, onde ela indica que
        // se o parâmetro for impar, ela retornará false;
    } else {
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(2));