// Faça uma função chamada wordReverse que recebe um parâmetro chamado text do tipo string contendo
// várias palavras separadas por espaço e retorne uma string com as palavras invertidas de trás para frente;

function wordReverse(text) {

    // Está retornando a função text com 3 métodos, split que divide a string em um array de strings e separa
    // a string em substring, o método reverse que está invertendo os elementos do array e faz com que o primeiro
    // elemento se torne o último e o último se torne o primeiro, e o método join que une todos os elementos de um
    // array em uma string e está sendo ultizado o espaço para separar a frase;
    return text.split(" ").reverse().join(' ');

}

// console.log(wordReverse('Hello World'));