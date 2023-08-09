document.getElementById("aumentar").addEventListener("click", function() {
    changeFontSize(2); // aumenta 2
  });
  
  document.getElementById("diminuir").addEventListener("click", function() {
    changeFontSize(-2); // diminui 2
  });
  
  function changeFontSize(delta) {
    var elements = document.querySelectorAll("body *");
    var minSize = 10; // minimo em px
    var maxSize = 24; // tamanho max em px
  
    for (var i = 0; i < elements.length; i++) {
      var currentSize = parseFloat(window.getComputedStyle(elements[i], null).getPropertyValue("font-size"));
      var newSize = currentSize + delta;
  
      // Verificar tamanho maximo e minimo da fonte
      if (newSize >= minSize && newSize <= maxSize) {
        elements[i].style.fontSize = newSize + "px";
      }
    }
  }
  