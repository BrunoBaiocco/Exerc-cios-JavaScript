// Faça uma função chamada isMultipleOf2 que recebe um parâmetro chamado val
// do tipo number e retorna um boolean indicando se o número é um multiplo de 2;

function isMultipleOf2(val) {

    // Está retornando uma operação, onde foi colocado o operador ===
    // que indica que se o resultado for 0, o número será um multiplo de 2
    // ou seja com o operador === se o resultado for 0, o cálculo será perfeito;
    return (val % 2 === 0);
}


// console.log(isMultipleOf2(02));
// console.log(isMultipleOf2(08));
// console.log(isMultipleOf2(03));
// console.log(isMultipleOf2(05));