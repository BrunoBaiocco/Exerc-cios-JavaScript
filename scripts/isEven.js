// Faça uma função chamada isEven que recebe um parâmetro chamado val
//  do tipo number e retorna um boolean indicando se o parâmetro é par;

function isEven(val) {
        // Está retornando a verficação e indicando que qualquer número dividido
        // por 2 e o resultado for igual a 0 ou seja um número par, o resultado será true
        // assim se você colocar um número par, a função irá retornar true;

        return val % 2 == 0

}

console.log(isEven(5));
console.log(isEven(2));