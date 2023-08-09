function is_cpf(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    var sum = 0;
    var checkDigit = parseInt(cpf.substring(9, 10));

    for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    var result = (sum * 10) % 11;
    if (result === 10 || result === 11) {
        result = 0;
    }

    if (result !== checkDigit) {
        return false;
    }

    sum = 0;
    checkDigit = parseInt(cpf.substring(10, 11));

    for (var i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    result = (sum * 10) % 11;
    if (result === 10 || result === 11) {
        result = 0;
    }

    if (result !== checkDigit) {
        return false;
    }

    return true;
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function validatePhoneNumber(phoneNumberInput) {
    const phoneNumber = phoneNumberInput.value;
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const formattedNumber = formatPhoneNumber(cleanedNumber); // Format the phone number
    const validationMessage = document.getElementById('phoneValidationMessage');

    if (/^55\d{11}$/.test(cleanedNumber) && /^(\(0?[1-9][1-9]\)|[1-9][1-9])/.test(cleanedNumber)) {
        validationMessage.textContent = 'Valid number.';
        validationMessage.style.color = 'green';
        phoneNumberInput.value = formattedNumber; // Set the formatted number back to the input
        phoneNumberInput.classList.remove('invalid');
        return true;
    } else {
        validationMessage.textContent = 'Insert a valid phone number.';
        validationMessage.style.color = 'red';
        phoneNumberInput.classList.add('invalid');
        return false;
    }
}

function formatPhoneNumber(phoneNumber) {
    const countryCode = '+55';
    const ddd = phoneNumber.substr(2, 2);
    const firstPart = phoneNumber.substr(4, 5);
    const secondPart = phoneNumber.substr(9, 4);
    return `${countryCode}(${ddd})${firstPart}-${secondPart}`;
}



$("#cep").blur(function () {

    var cep = $(this).val().replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {

            $("#rua2").val("...");
            $("#bairro").val("...");
            $("#cidade").val("...");
            $("#municipio").val("...");
            $("#uf").val("...");

            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    $("#rua2").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#municipio").val(dados.municipio);
                    $("#uf").val(dados.uf);
                }
                else {
                    limpa_formulário_cep();
                    alert("Zip Code not found.");
                }
            });
        }
        else {
            limpa_formulário_cep();
            alert("Invalid Zip Code.");
        }
    }
    else {
        limpa_formulário_cep();
    }
});

function checkAge() {
    var inputDate = document.getElementById("dtnasc").value;
    var currentDate = new Date();
    var selectedDate = new Date(inputDate);
    var minAgeDate = new Date();
    minAgeDate.setFullYear(currentDate.getFullYear() - 18);

    if (selectedDate > minAgeDate) {
        showToast("You must be at least 18 years old.");
        return false;
    }

    return true;
}

function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast align-items-center text-white bg-primary border-0";
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");

    var toastBody = document.createElement("div");
    toastBody.className = "d-flex";
    toast.appendChild(toastBody);

    var toastIcon = document.createElement("i");
    toastIcon.className = "bi bi-check-circle-fill me-2";
    toastBody.appendChild(toastIcon);

    var toastMessage = document.createElement("div");
    toastMessage.className = "toast-body";
    toastMessage.innerText = message;
    toastBody.appendChild(toastMessage);

    var toastContainer = document.getElementById("toastContainer");
    toastContainer.appendChild(toast);

    var bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

function validar() {
    var nome = document.getElementById("nome").value;
    var nomeRegex = /^[A-Za-z ]{15,60}$/;
    var email = document.getElementById("email").value;
    var dtnasc = document.getElementById("dtnasc").value;
    var sexo = document.getElementById("sexo").value;
    var nomemae = document.getElementById("nomemae").value;
    var nomemaeRegex = /^[A-Za-z ]{15,60}$/;
    var cpf = document.getElementById("cpf").value;
    var cel = document.getElementById("cel").value;
    var telfixo = document.getElementById("telfixo").value;
    var cep = document.getElementById("cep").value;
    var numero = document.getElementById("numero").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confsenha = document.getElementById("confsenha").value;


    if (nome.trim() === "") {
        showToast("Please fill in the Name field.");
        return false;
    }
    if (!nomeRegex.test(nome)) {
        showToast("The Name field must contain only alphabetic characters and be between 15 and 60 characters long.");
        return false;
    }

    if (email.trim() === "") {
        showToast("Please fill in the Email field.");
        return false;
    }
    if (email.indexOf("@") === -1 || !/(.com|.org|.ong|.edu|.gov)$/i.test(email)) {
        showToast("The Email field must contain a valid email address.");
        return false;
    }


    if (dtnasc.trim() === "") {
        showToast("Please fill in the Date of Birth field.");
        return false;
    }

    if (!checkAge()) {
        return false;
    }

    if (sexo.trim() === "Selecione") {
        showToast("Please select a Gender option.");
        return false;
    }

    if (nomemae.trim() !== '') {
        if (!nomemaeRegex.test(nomemae)) {
            showToast("The Maternal Name field must contain only alphabetic characters and be between 15 and 60 characters long.");
            return false;
        }
    }


    if (cpf.trim() !== '' && !is_cpf(cpf)) {
        showToast("The CPF entered is not valid.");
        return false;
      }
      

   

    if (cel.trim() === "") {
        showToast("Please fill in the Mobile field.");
        return false;
    }
    var celRegex = /^\+55\(\d{2}\)\d{5}-\d{4}$/;
    if (!celRegex.test(cel)) {
        showToast("The Mobile field must be in the format +55(xx)xxxxx-xxxx.");
        return false;
    }

    if (telfixo.trim() !== '') {
        var telfixoRegex = /^\+55\(\d{2}\)\d{5}-\d{4}$/;
        if (!telfixoRegex.test(telfixo)) {
            showToast("O campo Telefone Fixo deve estar no formato +55(xx)xxxxx-xxxx.");
            return false;
        }
    }

    if (cep.trim() === "") {
        showToast("Please fill in the zip code field.");
        return false;
    }

    if (numero.trim() === "") {
        showToast("Please fill in the Number field.");
        return false;
    }

    if (login.trim() === "6") {
        showToast("Por favor, preencha o campo Login.");
        return false;
    }

    var loginRegex = /^[A-Za-z]{6}$/;
    if (!loginRegex.test(login)) {
        showToast("The Login field must contain exactly 6 alphabetic characters.");
        return false;
    }

    if (senha.trim().length < 8) {
        showToast("The Password field must be at least 8 characters long.");
        return false;
    }


    if (confsenha.trim() === "") {
        showToast("Please fill in the Confirm Password field.");
        return false;
    }

    if (senha !== confsenha) {
        showToast("The passwords entered do not match.");
        return false;
    }

    
    if (!validatePhoneNumber(document.getElementById("cel"))) {
        showToast("The mobile number is not valid.");
        return false;
    }

    if (telfixo.trim() !== '') {
        if (!validatePhoneNumber(document.getElementById("telfixo"))) {
            showToast("The landline number is not valid.");
            return false;
        }
    }

   



    localStorage.setItem("nome", $("#nome").val());
    localStorage.setItem("email", email);
    localStorage.setItem("dtnasc", dtnasc);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("nomemae", nomemae);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("cel", cel);
    localStorage.setItem("telfixo", telfixo);
    localStorage.setItem("cep", cep);
    localStorage.setItem("login", $("#login").val());
    localStorage.setItem("senhacadastro", $("#confsenha").val());


    return true;
}

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        validar();
    });
});

$("#rua2").attr("disabled", "disable");
$("#cidade").attr("disabled", "disable");
$("#bairro").attr("disabled", "disable");
$("#uf").attr("disabled", "disable");



