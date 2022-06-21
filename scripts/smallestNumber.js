// Faça uma função chamada smallestNumber que recebe dois parâmetros chamados
// val1 e val2 do tipo number e retorna um number que é o parâmetro de menor valor;

function smallestNumber(val1, val2){
    // Está retornando os dois parâmetros, está sendo ultilizado um operador
    // de disjunção que é o ||, este operador retorna o menor valor;
    return val1 || val2;
}

// console.log(smallestNumber(10, 15));