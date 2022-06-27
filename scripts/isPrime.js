// Faça uma função chamada isPrime que recebe um parâmetro chamado val 
// do tipo number e retorna um boolean indicando se o parâmetro é um número primo;


// function isPrime(val){
function probablyPrime(val) {
    if (val === 2 || val === 3)
        return true;
    if (val % 2 === 0 || val < 2)
        return false;


}

console.log(probablyPrime(5))

// Terminar de fazer