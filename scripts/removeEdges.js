// Faça uma função chamada removeEdges que recebe um parâmetro chamado 
// text do tipo string e retorna a string sem o primeiro e último caractere;


function removeEdges(text) {

    // Está retornando o parâmetro onde contém uma substring, e na mesma foi
    // utilizado o método slice onde ele permite a substring usar índices negativos
    // assim foi obitdo a retirada do primeiro e último caractere da string;
    return substring = text.slice(1, -1);
}


// console.log(removeEdges('*Teste*'));
// console.log(removeEdges('Teste'));