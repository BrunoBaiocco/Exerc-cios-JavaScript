// Faça uma função chamada stringWrap que recebe um parâmetro chamado text do tipo string e outro parâmetro chamado 
// wrapper do tipo string e retorna uma string que é o parâmetro text "empacotado" no meio de dois parâmetros wrapper;

function stringWrap(string, wrapper) {

    // Está retornando o parâmetro text que está no meio de dois parâmetros wrapper
    // assim está sendo feita a concatenação da string text, que está sendo envolvido
    // pelas duas strings wrapper;
    return wrapper + string + wrapper;
}

// console.log(stringWrap('Teste', '*'));
// console.log(stringWrap('Teste', '<span>'));