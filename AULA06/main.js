// const NOME_DA_PESSOA = 'William Dias';
// const DATA_DE_NASCIMENTO = '10/04/1989';
// const CPF = '000.000.000-00';

// var idade = 32;
// var peso = 80;

// alert(NOME_DA_PESSOA + ', ' + idade + ', ' + DATA_DE_NASCIMENTO);

// console.log(`Nome: ${NOME_DA_PESSOA},
// Idade: ${idade},
// Data de Nascimento: ${DATA_DE_NASCIMENTO}`);

const welcome = function () {
  let nome = window.prompt('Qual é o seu nome?');
  let favouriteColour = window.prompt('Qual a sua cor favorita (Em Ingles)');

  document.getElementById(
    'text'
  ).innerHTML = `Welcome ${nome}. It is really important to us that you are here!`;

  changeBodyColor(favouriteColour);
};

const changeBodyColor = function (color) {
  document.body.style.background = color;
};

welcome();
