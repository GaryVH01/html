const navMobile = document.querySelector(".nav-mobile");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".burger-icon");

menuIcon.addEventListener("click", () => {
  navMobile.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  navMobile.style.display = "none";
});
