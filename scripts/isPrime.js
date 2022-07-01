// Faça uma função chamada isPrime que recebe um parâmetro chamado val 
// do tipo number e retorna um boolean indicando se o parâmetro é um número primo;



function isPrime(val) {

    // Está sendo criado uma varíavel start que recebe o valor 2;
    // Contém a declaração while, dentro dela contém o start e o operador menor ou igual, ao lado
    // contém a função Math.sqrt, assim concluisse que a varíavel é menor ou igual a raiz
    // quadrada do parâmetro;
    // Contém a condição if, dentro delá contém o parâmetro, start ++ e <1, assim indicando que
    // o resto da divão do parâmetro e da varíavel for maior que irá ter um retorno false;
    // Contém o retorno do parâmetro onde indica que o valor é maior que 1;

    var start = 2;
    while (start <= Math.sqrt(val))
        if (val % start++ < 1) return false;
    return val > 1;
}

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(5));