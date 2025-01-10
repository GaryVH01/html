const navMobile = document.querySelector(".nav-mobile");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".burger-icon");
const headerIcons = document.querySelector(".header-icons");
const searchIcon = document.querySelector(".header-icons-search input");

// Forcer la fermeture du menu burger au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  navMobile.style.display = "none";
});

// Fonction permettant d'ouvrir et fermer le menu burger
menuIcon.addEventListener("click", () => {
  navMobile.style.display = "flex";
  // headerIcons.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  navMobile.style.display = "none";
  // headerIcons.style.display = "flex";
});

// searchIcon.addEventListener("click", () => {
//   searchIcon.style.display = "flex";
// });
