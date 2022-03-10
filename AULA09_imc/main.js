const calcIMC = function () {
    let form = document.getElementById('imc_form');
    let peso = form.peso.value;
    let altura = form.altura.value / 100;
    let resultado = peso / (altura * altura);

    document.getElementById(
        'imcTotal'
    ).innerText = `O resultado do seu IMC é ${resultado.toFixed(2)}`;

    if (resultado < 18.5) {
        alert('Infelizmente voce está abaixo do peso!');
    } else if (resultado < 24.9) {
        alert('Parabéns, voce está no peso normal.');
    } else if (resultado < 29.9) {
        alert('Que pena, voce está com sobrepeso.');
    } else {
        alert('Voce deve procurar ajuda!');
    }
};
