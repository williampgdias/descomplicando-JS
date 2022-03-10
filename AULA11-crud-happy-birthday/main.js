var users = [];

const saveData = function () {
    var form = document.getElementById('formManageUser');

    let name = form.name;
    let url = form.url;
    let birthday = form.birthday;
    let remember = form.remember.checked;

    if (validateFormData(name, birthday, url)) {
        addDataToArray(name.value, birthday.value, remember, url.value);
        renderRegistersOnHTML();
        // hideModal(); //FIXME
        clearFormData();
    }

    // alert(`
    // Nome: ${name}
    // Birthday: ${birthday}
    // Remember: ${remember}
    // `);
};

const validateFormData = function (name, birthday, url) {
    var formularioValido = true;

    /*
     * || = OR, uma coisa ou outra
     * && = AND
     * */

    if (name.value.length < 5) {
        formularioValido = false;
        name.classList.add('error');
    }

    if (birthday.value.length == 0) {
        formularioValido = false;
        birthday.classList.add('error');
    }

    if (url.value.length == 0) {
        formularioValido = false;
        url.classList.add('error');
    }

    if (
        name.value.length < 5 ||
        birthday.value.length == 0 ||
        url.value.length == 0
    ) {
        formularioValido = false;
    }

    setTimeout(function () {
        name.classList.remove('error');
        birthday.classList.remove('error');
        url.classList.remove('error');
    }, 2000);

    return formularioValido;
};

const addDataToArray = function (name, birthday, remember, url) {
    users.push([name, birthday, remember, url]);
};

const clearFormData = function () {
    var form = document.getElementById('formManageUser');
    form.reset();
};

//FIXME;
// const hideModal = function () {
//     var modal = document.getElementById('manageRegister');
//     modal.modal('hide');
// };

const renderRegistersOnHTML = function () {
    var container = document.getElementById('containerRegisters');
    container.innerHTML = '';

    // while
    // for
    // forEach

    for (var i = 0; i < users.length; i++) {
        var arrayItem = users[i];
        var elementFilled = createHTMLElement(
            arrayItem[0],
            arrayItem[3],
            arrayItem[1]
        );
        container.appendChild(elementFilled);
    }
};

const createHTMLElement = function (name, urlImage, dateBirthday) {
    // DIV ELEMENT
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('col-md-4');

    // CARD ELEMENT
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // IMG ELEMENT
    var img_CardDiv = document.createElement('img');
    img_CardDiv.src = urlImage;
    img_CardDiv.classList.add('card-img-top');
    cardDiv.appendChild(img_CardDiv);

    // CARDBODY ELEMENT
    var cardBody_CardDiv = document.createElement('div');
    cardBody_CardDiv.classList.add('card-body');
    cardBody_CardDiv.classList.add('text-center');

    // H5 ELEMENT
    var h5_CardBody_CardDiv = document.createElement('h5');
    h5_CardBody_CardDiv.classList.add('card-title');
    h5_CardBody_CardDiv.innerHTML = name;
    cardBody_CardDiv.appendChild(h5_CardBody_CardDiv);

    // A ELEMENT
    var a_CardBody_CardDiv = document.createElement('a');
    a_CardBody_CardDiv.classList.add('btn');
    a_CardBody_CardDiv.classList.add('btn-primary');
    a_CardBody_CardDiv.innerHTML = dateBirthday;

    // CALLING ELEMENTS
    cardBody_CardDiv.appendChild(a_CardBody_CardDiv);
    cardDiv.appendChild(cardBody_CardDiv);
    mainDiv.appendChild(cardDiv);

    return mainDiv;
};

document.getElementById('birthday').addEventListener('keyup', function (e) {
    e.preventDefault();

    if (event.keyCode === 13) {
        saveData();
    }
});
