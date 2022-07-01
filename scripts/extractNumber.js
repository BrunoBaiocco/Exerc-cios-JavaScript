// Faça uma função chamada extractNumber que recebe um parâmetro chamado val do 
// tipo string e retorna um number extraindo/eliminando todos os caracteres que não forem numéricos;

function extractNumber(val) {

    return val.replace(/^(-)|[^0-9.]+/g, '$1') || 'NaN';
}

// console.log(extractNumber('oo'));
// console.log(extractNumber('57o'));
// console.log(extractNumber('n1.5'));
// console.log(extractNumber('n1,5'));

// Fazer os comentários