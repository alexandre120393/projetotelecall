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

cpfCheck = function (el) {
    const cpfValue = el.value.replace(/\D/g, '');

    if (cpfValue.length > 11) {
        el.value = cpfValue.substring(0, 11);
    }

    document.getElementById('cpfResponse').innerHTML = is_cpf(el.value) ? '<br><span style="color:green">CPF Válido</span>' : '<br><span style="color:red">Insira um CPF válido</span>';
    if (el.value == '') document.getElementById('cpfResponse').innerHTML = '';
}

function validatePhoneNumber(phoneNumberInput) {
    const phoneNumber = phoneNumberInput.value;
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const formattedNumber = formatPhoneNumber(cleanedNumber); // Format the phone number
    const validationMessage = document.getElementById('phoneValidationMessage');

    if (/^55\d{11}$/.test(cleanedNumber) && /^(\(0?[1-9][1-9]\)|[1-9][1-9])/.test(cleanedNumber)) {
        validationMessage.textContent = 'Número válido.';
        validationMessage.style.color = 'green';
        phoneNumberInput.value = formattedNumber; // Set the formatted number back to the input
        phoneNumberInput.classList.remove('invalid');
        return true;
    } else {
        validationMessage.textContent = 'Insira um número de telefone válido.';
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
                    alert("CEP não encontrado.");
                }
            });
        }
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
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
        showToast("Você deve ter mais de 18 anos.");
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
        showToast("Por favor, preencha o campo Nome.");
        return false;
    }
    if (!nomeRegex.test(nome)) {
        showToast("O campo Nome deve conter apenas caracteres alfabéticos e ter entre 15 e 60 caracteres.");
        return false;
    }

    if (email.trim() === "") {
        showToast("Por favor, preencha o campo Email.");
        return false;
    }
    if (email.indexOf("@") === -1 || !/(.com|.org|.ong|.edu|.gov)$/i.test(email)) {
        showToast("O campo Email deve conter um endereço de email válido.");
        return false;
    }


    if (dtnasc.trim() === "") {
        showToast("Por favor, preencha o campo Data de Nascimento.");
        return false;
    }

    if (!checkAge()) {
        return false;
    }

    if (sexo.trim() === "Selecione") {
        showToast("Por favor, selecione uma opção de Sexo.");
        return false;
    }

    if (nomemae.trim() !== '') {
        if (!nomemaeRegex.test(nomemae)) {
            showToast("O campo Nome Materno deve conter apenas caracteres alfabéticos e ter entre 15 e 60 caracteres.");
            return false;
        }
    }


    if (cpf.trim() === "") {
        showToast("Por favor, preencha o campo CPF.");
        return false;
    }

    if (cel.trim() === "") {
        showToast("Por favor, preencha o campo Celular.");
        return false;
    }
    var celRegex =/^\+55\(\d{2}\)\d{5}-\d{4}$/;
    if (!celRegex.test(cel)) {
        showToast("O campo Celular deve estar no formato +55(xx)xxxxx-xxxx.");
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
        showToast("Por favor, preencha o campo CEP.");
        return false;
    }

    if (numero.trim() === "") {
        showToast("Por favor, preencha o campo Número.");
        return false;
    }

    if (login.trim() === "6") {
        showToast("Por favor, preencha o campo Login.");
        return false;
    }

    var loginRegex = /^[A-Za-z]{6}$/;
    if (!loginRegex.test(login)) {
        showToast("O campo Login deve conter exatamente 6 caracteres alfabéticos.");
        return false;
    }

    if (senha.trim().length < 8) {
        showToast("O campo Senha deve ter no mínimo 8 caracteres.");
        return false;
    }


    if (confsenha.trim() === "") {
        showToast("Por favor, preencha o campo Confirme a Senha.");
        return false;
    }

    if (senha !== confsenha) {
        showToast("As senhas digitadas não correspondem.");
        return false;
    }

    if (!is_cpf(cpf)) {
        showToast("O CPF digitado não é válido.");
        return false;
    }

    if (!validatePhoneNumber(document.getElementById("cel"))) {
        showToast("O número de celular não é válido.");
        return false;
    }

    if (telfixo.trim() !== '') {
        if (!validatePhoneNumber(document.getElementById("telfixo"))) {
            showToast("O número de telefone fixo não é válido.");
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



