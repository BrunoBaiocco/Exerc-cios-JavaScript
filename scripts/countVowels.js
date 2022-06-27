// Faça uma função chamada countVowels que recebe um parâmetro chamado val
// do tipo string e retorna um number com a contagem das vogais;


function countVowels(val) {

    // Foi utilizada uma expressão regular com o padrão [aeiou], Os colchetes são usados ​​para designar uma 
    // “classe de caractere”, assim a expressão regular procurará qualquer caractere que corresponda a classe
    // do caractere. Após foi utilizado g e i, g para uma pesquisa global continuar a fazer pesquisas e i para
    // uma pesquisa onde permite que não diferencia maiúsculas de minúsculas permite que você evite também definir vogais maiúsculas.
    // Após foi utilizado o método match, onde se houver uma correspondência, todas as instâncias com expressão regular irão retornar,
    // se não houver, um null irá retornar, assim foi ultilizado o valor matchingInstances que avalia os valores e retorna os mesmos,
    // assim se ele for verdadeiro retorna uma mensagem mostrando o número das vogais;

    let matchingInstances = val.match(/[aeiou]/gi);

    if (matchingInstances)
        return matchingInstances.length;
}


// console.log(countVowels('test'));
// console.log(countVowels('ok'));
// console.log(countVowels('plantae'));