const qualOTipo = function () {
    var idade = window.prompt('Qual é a sua idade?');

    if (idade <= 1) {
        alert('Voce é um bebe!');
    } else if (idade < 15) {
        alert('Voce é uma crianca');
    } else if (idade <= 18) {
        alert('Voce é um adolescente');
    } else if (idade <= 30) {
        alert('Voce é um adulto');
    } else {
        alert('Voce é um idoso!');
    }
};

qualOTipo();

// const comer = function () {
//     var temComida = window.prompt('Tem comida na geladeira? (S/N)');

//     if (temComida == 's') {
//         document.getElementById('answer').innerHTML = `Vou comer.`;
//     } else {
//         document.getElementById('answer').innerHTML = `Vou pedir uma pizza.`;
//     }
// };

// comer();
