// Faça uma função chamada isBoolean que recebe um
// parâmetro chamado val e retorna um boolean
// indicando se o parâmetro é do tipo boolean;

function isBoolean(val) {

    // Retorna a verificação onde verifica se o parâmetro val
    //  é do tipo boolean, ultizando o operador === que verifica
    //  se o valor e o tipo são iguais,  então só vai ser true se for exatamente igual;
    return val === true || val === false;
}

// console.log(isBoolean(true));
// console.log(isBoolean(false));
// console.log(isBoolean(1));
// console.log(isBoolean(null));