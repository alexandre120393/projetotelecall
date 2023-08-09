const mode = document.getElementById('mode_icon');
const body = document.body;

// Checa se a preferencia dark mode esta no localStorage
const darkModePreference = localStorage.getItem('darkModePreference');

// Aplica dark mode se preferencia for setada
if (darkModePreference === 'true') {
  mode.classList.remove('fa-moon');
  mode.classList.add('fa-sun');
  body.classList.add('dark-mode');
}

mode.addEventListener('click', () => {
  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    body.classList.add('dark-mode');

    // Salva dark mode preferencia no localStorage
    localStorage.setItem('darkModePreference', 'true');
  } else {
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    body.classList.remove('dark-mode');

   // Remove dark mode preferenccia
    localStorage.setItem('darkModePreference', 'false');
  }
});
