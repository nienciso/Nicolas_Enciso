const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
