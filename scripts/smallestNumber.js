// Faça uma função chamada smallestNumber que recebe dois parâmetros chamados
// val1 e val2 do tipo number e retorna um number que é o parâmetro de menor valor;

function smallestNumber(val1, val2){
    // Está retornando uma linha if e else, então verifica se val1 é menor que val2,
    // se sim retorna o menor número, está sendo usado um operador condicional ternário para realizar a operação;
    return(val1 < val2) ? val1 : val2;
}

// console.log(smallestNumber(10, 15));