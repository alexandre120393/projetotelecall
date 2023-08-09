const loggedInUser = sessionStorage.getItem("login");
const userDetails = {
  name: localStorage.getItem("nome") || "Teste",
};

const userDetailsContainer = document.getElementById("userDetails");
const loginLink = document.getElementById("botaonavbar3");
const cadastrarLink = document.getElementById("botaocadastrar");
const logoutButton = document.createElement("button");
logoutButton.textContent = "Sair";

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("login");
  userDetailsContainer.innerHTML = "";
  loginLink.style.display = "inline-block";
  cadastrarLink.style.display = "inline-block";
});

if (loggedInUser) {
  userDetailsContainer.innerHTML = `
    <span style="color:white">Bem-vindo, ${userDetails.name}!</span>
  `;
  userDetailsContainer.appendChild(logoutButton);
  loginLink.style.display = "none";
  cadastrarLink.style.display = "none";
} else {
  userDetailsContainer.innerHTML = "";
  loginLink.style.display = "inline-block";
  cadastrarLink.style.display = "inline-block";
}








