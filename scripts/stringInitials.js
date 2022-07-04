// Faça uma função chamada stringInitials que recebe um parâmetro chamado text do tipo string contendo
// várias palavras e retorna uma string extraindo apenas o primeiro caractere de cada palavra em caixa alta;


function stringInitials(text) {

    // Está retornando a função com o método split que divide uma string em uma lista ordenada de substrings e 
    // coloca essas substrings em um array e retorna o array, assim é utilizado o método map que está sendo invocado
    // a partir do método split e recebe o parâmetro com a função callback que retorna o valor do parâmetro com o método
    // charAt que retorna o caractere especificado que é 0, assim retorna os 3 primeiros caractéres de cada palavra, assim
    // foi utilizado o método join que une todos os elementos de um array em uma string e dentro do método é retirado os espaços
    // assim finalizando a função é utilizado o método toUpperCase que retorna o valor da string original convertido em letras maiúsculas.
    return text.split(' ').map(text => text.charAt(0)).join('').toUpperCase();
}

// console.log(stringInitials('Plantae gestão agrícola'));