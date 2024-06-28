document.addEventListener("DOMContentLoaded", function () {
  const switcherTheme = document.querySelector(".main__check");
  const root = document.documentElement;

  const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const storedTheme = localStorage.getItem("theme");
  const currentTheme = storedTheme || systemColorScheme;

  root.setAttribute("data-theme", currentTheme);
  switcherTheme.checked = currentTheme === "dark";

  function toggleTheme() {
    const setTheme = switcherTheme.checked ? "dark" : "light";
    root.setAttribute("data-theme", setTheme);

    localStorage.setItem("theme", setTheme);
  }

  switcherTheme.addEventListener("change", toggleTheme);

  const carrousel = document.querySelector(".carrousel__container");
  const imgWidth = document.querySelector(".img").offsetWidth;
  let desplazamiento = 0;
  function desplazarCarrusel() {
    desplazamiento -= imgWidth;
    carrousel.style.transform = `translateX(${desplazamiento}px)`;
    if (desplazamiento <= -imgWidth) {
      desplazamiento = 0;
      carrousel.style.transform = `translateX(0)`;
    }
  }
  setInterval(desplazarCarrusel, 3000); /* Cambio de imagen cada 3 segundos */

  const images = document.querySelectorAll(".servicios__figure img");
  function triggerAnimation(entries) {
    entries.forEach((entry) => {
      const image = entry.target;
      image.classList.toggle("unset", entry.isIntersecting);
    });
  }
  const observer = new IntersectionObserver(triggerAnimation, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  images.forEach((image) => {
    observer.observe(image);
  });

  const planIndividual = document.getElementById("individual");
  const planFamiliar = document.getElementById("familiar");
  const botonIncluye = document.getElementById("incluye");
  const planDesplegable = document.querySelector(".plan__desplegable");

  const mostrarPlanes = (tipoPlan) => {
    planIndividual.style.display = tipoPlan === "individual" ? "block" : "none";
    planFamiliar.style.display = tipoPlan === "familiar" ? "block" : "none";
  };

  document
    .querySelector(".individual")
    .addEventListener("click", () => mostrarPlanes("individual"));
  document
    .querySelector(".familiar")
    .addEventListener("click", () => mostrarPlanes("familiar"));

  botonIncluye.addEventListener("click", () => {
    planDesplegable.style.display =
      planDesplegable.style.display === "block" ? "none" : "block";
  });
});
