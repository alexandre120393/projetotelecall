function showSuccessToast() {
    var toast = document.getElementById("success-toast");
    var toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
}

function showErrorToast() {
    var toast = document.getElementById("error-toast");
    var toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
}

function validateForm() {
    var email = document.getElementById("email2").value;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|gov|ong|org|edu)$/;

    if (!emailRegex.test(email)) {
        showErrorToast();
        return false;
    }

    // Redirect to login.html
    window.location.href = "login.html";
}