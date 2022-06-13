// Faça uma função chamada booleanResponse que recebe um 
// parâmetro chamado val do tipo boolean e retorna uma string 
// com valor sim para true e não para false;


function booleanResponse(val) {
    // Foi utilizada a condicional if, onde ela indica que
    // se o parâmetro for true, ela retornará 'sim'
    if (val == true) {
        return 'sim'

        // Foi utilizada a condicional else, onde ela indica que
        // se o parâmetro for false, ela retornará 'não'
    } else {
        return 'não'
    }

}

// console.log(booleanResponse(true));
// console.log(booleanResponse(false));