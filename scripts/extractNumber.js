// Faça uma função chamada extractNumber que recebe um parâmetro chamado val do 
// tipo string e retorna um number extraindo/eliminando todos os caracteres que não forem numéricos;

function extractNumber(val) {

    return  val.replace(/[^\d]+/g,'') 

}

console.log(extractNumber('oo'));
console.log(extractNumber('57o'));
console.log(extractNumber('n1.5'));
console.log(extractNumber('n1,5'));

// Terminar de resolver