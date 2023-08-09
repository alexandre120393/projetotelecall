$("#login2").val(localStorage.getItem("login"));
$("#senha2").val(localStorage.getItem("senhacadastro"));

document.getElementById("botaoinvisivel").addEventListener("click", function(event) {
    event.preventDefault(); 

    var storedLogin = localStorage.getItem("login");
    var storedPassword = localStorage.getItem("senhacadastro");
    var enteredLogin = $("#login2").val();
    var enteredPassword = $("#senha2").val();

    if (storedLogin === enteredLogin && storedPassword === enteredPassword) {
        sessionStorage.setItem("login", enteredLogin);
        sessionStorage.setItem("senhacadastro", enteredPassword);
        console.log("Logged in successfully!");
        window.location.href = "index.html"; 
    } else {
        console.log("Invalid login or password!");
        showToast("Invalid login and/or password, try again.");
    }
});

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