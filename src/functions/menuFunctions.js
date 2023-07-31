const hamMenu = document.getElementById("hamMenu");
const barsIcon = document.getElementById("barMenu");
const mobileMenu = document.getElementById("mobile");
const closeMenu = document.getElementById("closeMenu");

const menuFunctions = () => {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    barsIcon.style.display = "block";
    closeMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    barsIcon.style.display = "none";
    closeMenu.style.display = "block";
  }
};

hamMenu.addEventListener("click", menuFunctions);

export default menuFunctions;
