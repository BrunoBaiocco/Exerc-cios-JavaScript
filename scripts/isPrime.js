// Faça uma função chamada isPrime que recebe um parâmetro chamado val 
// do tipo number e retorna um boolean indicando se o parâmetro é um número primo;


// function isPrime(val){
function isPrime(val) {

    for (var i = 2; i < val; i++)
        if (val % i === 0) return false;
    return val !== 1;
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(5))


// Terminar de realizar