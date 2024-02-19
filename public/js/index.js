window.addEventListener("load", function () {
  const switcherTheme = document.querySelector(".main__check");
  const root = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    switcherTheme.checked = true;
  }

  function toggleTheme() {
    const setTheme = this.checked ? "dark" : "light";
    root.setAttribute("data-theme", setTheme);

    localStorage.setItem("theme", setTheme);
    console.log("Función toggleTheme ejecutada");
  }

  switcherTheme.addEventListener("change", toggleTheme);
});

window.addEventListener("load", function () {
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
});

const images = document.querySelectorAll(".servicios__figure");
function triggerAnimation(entries) {
  entries.forEach((entry) => {
    const image = entry.target.querySelector("img");
    image.classList.toggle("unset", entry.isIntersecting);
  });
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};
const observer = new IntersectionObserver(triggerAnimation, options);
images.forEach((image) => {
  observer.observe(image);
});

const botonIndividual = document.querySelector(".individual");
const botonFamiliar = document.querySelector(".familiar");
const planIndividual = document.getElementById("individual");
const planFamiliar = document.getElementById("familiar");
const botonIncluye = document.getElementById("incluye");
const planDesplegable = document.querySelector(".plan__desplegable");

const mostrarPlanes = (tipoPlan) => {
  if (tipoPlan === "individual") {
    planIndividual.style.display = "block";
    planFamiliar.style.display = "none";
  } else if (tipoPlan === "familiar") {
    planIndividual.style.display = "none";
    planFamiliar.style.display = "block";
  }
};

botonIndividual.addEventListener("click", () => mostrarPlanes("individual"));
botonFamiliar.addEventListener("click", () => mostrarPlanes("familiar"));

botonIncluye.addEventListener("click", () => {
  if (planDesplegable.style.display === "block") {
    planDesplegable.style.display = "none";
  } else {
    planDesplegable.style.display = "block";
  }
});
