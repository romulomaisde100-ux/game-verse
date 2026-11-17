// Inicializações leves. A navegação responsiva e os componentes são fornecidos pelo Bootstrap.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
