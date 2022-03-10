/******************** OPERADORES MATEMATICOS ********************/

const soma = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = parseFloat(n1) + parseFloat(n2);

    alert(`Resultado: ${resultado}`);
};

const divisao = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = parseFloat(n1) / parseFloat(n2);

    alert(`Resultado: ${resultado}`);
};

const multiplicacao = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = parseFloat(n1) * parseFloat(n2);

    alert(`Resultado: ${resultado}`);
};

const subtracao = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = parseFloat(n1) - parseFloat(n2);

    alert(`Resultado: ${resultado}`);
};

/******************** OPERADORES DE COMPARACAO ********************/

const igual = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 == n2;

    alert(`Resultado: ${resultado}`);
};

const totalmenteIgual = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 === n2;

    alert(`Resultado: ${resultado}`);
};

const maior = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 > n2;

    alert(`Resultado: ${resultado}`);
};

const maiorOuIgual = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 >= n2;

    alert(`Resultado: ${resultado}`);
};

const menor = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 < n2;

    alert(`Resultado: ${resultado}`);
};

const menorOuIgual = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 <= n2;

    alert(`Resultado: ${resultado}`);
};

const diferente = function () {
    let n1 = window.prompt('Digite o primeiro numero');
    let n2 = window.prompt('Digite o segundo numero');
    let resultado = n1 != n2;

    alert(`Resultado: ${resultado}`);
};
