// Faça uma função chamada isMultipleOf5 que recebe um parâmetro chamado val do 
// tipo number e retorna um boolean indicando se o número é um múltiplo de 5;


function isMultipleOf5(val) {

    // Seguindo a mesma lógica do exercício anterior, está retornando uma operação
    // onde foi colocado o operador ===, que indica que se o resultado for 0
    // o número será um multiplo de 5, ou seja com o operador === se o resultado for 0, o cálculo será perfeito;
    return (val % 5 === 0);
}

// console.log(isMultipleOf5(05))
// console.log(isMultipleOf5(80))
// console.log(isMultipleOf5(47))
// console.log(isMultipleOf5(52))