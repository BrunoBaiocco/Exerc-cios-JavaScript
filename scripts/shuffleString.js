// Faça uma função chamada shuffleString que recebe um parâmetro chamado text do
// tipo string e retorna uma string com o valor do parâmetro "embaralhado".

function shuffleString(text) {
    var parts = text.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}


console.log(shuffleString('Plantae'));
console.log(shuffleString('ok')); 

// Não terminada