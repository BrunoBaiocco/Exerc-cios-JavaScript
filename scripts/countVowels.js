// Faça uma função chamada countVowels que recebe um parâmetro chamado val
// do tipo string e retorna um number com a contagem das vogais;




// Foi criada uma constante vowels, que contém uma matriz com as vogais, após foi criada uma função
// com o valor val, dentro desta função está uma counter variável == 0, foi utilizado um for...of loop
// para percorrer a string, o for…of loop terá objetos iteráveis ​​
const vowels = ["a", "e", "i", "o", "u"]

function countVolwels(val) {
    let counter = 0

    for (let letter of val.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++  
        }
    }

    return counter
}


console.log(countVolwels('test'));
console.log(countVolwels('ok'));
console.log(countVolwels('plantae'));