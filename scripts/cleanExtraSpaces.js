// Faça uma função chamada cleanExtraSpaces que recebe um parâmetro chamado val do tipo
// string com várias palavras separadas por um ou mais espaços e retorna uma string removendo excessos de espaços;

function cleanExtraSpaces(val) {

    // Foi retornada a função  com método trim que remove os espaços denecessários
    // declarados no início ou no final de uma string.
    return val.trim();
}

// console.log(cleanExtraSpaces('  Hello    World ')); 
// console.log(cleanExtraSpaces('Plantae  Gestão      Agrícola'));