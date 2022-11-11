const checkBoxBtn = document.querySelector(".checked");
const navbarMenu = document.querySelector(".navbar-menu");

checkBoxBtn.addEventListener("click", (e) => {
    console.log(navbarMenu)
  navbarMenu.classList.toggle("show");
});
