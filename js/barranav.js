const navToggle = document.querySelector(".abrir-menu");
const navMenu = document.querySelector(".lista-nav");
const carrusel = document.querySelector('.barra-carrusel');
const ocultarFooter = document.querySelector('.footer')


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("lista-nav_visible");
  carrusel.classList.toggle('barra-carrusel-oculto');
  ocultarFooter.classList.toggle('footer-oculto');


  if (navMenu.classList.contains("lista-nav")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    

  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
