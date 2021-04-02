const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");
const header = document.getElementById("header");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
	navbarMenu.classList.toggle("active");
	burgerMenu.classList.toggle("active");
	header.classList.toggle("active");
});
