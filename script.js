// Menu toggle para dispositivos móveis
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Validação do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    this.reset();
  });
