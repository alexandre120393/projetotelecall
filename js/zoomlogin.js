function increaseFontSize() {
    var body = document.querySelector('body');
    var currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    var newSize = currentSize + 2;
    body.style.fontSize = newSize + 'px';
}

function decreaseFontSize() {
    var body = document.querySelector('body');
    var currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    var newSize = currentSize - 2;
    body.style.fontSize = newSize + 'px';
}