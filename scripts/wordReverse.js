// Faça uma função chamada wordReverse que recebe um parâmetro chamado text do tipo string contendo
// várias palavras separadas por espaço e retorne uma string com as palavras invertidas de trás para frente;

function wordReverse(text){

    return text.split('').reverse().join('');
}

console.log(wordReverse('Hello World'))

// Terminar de realizar