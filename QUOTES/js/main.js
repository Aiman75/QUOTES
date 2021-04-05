const burgerMenuOne = document.getElementById("burgerOne");
const burgerMenuTwo = document.getElementById("burgerTwo");
const burgerMenuThree = document.getElementById("burgerThree");
const burgerMenuFour = document.getElementById("burgerFour");
const burgerMenuFive = document.getElementById("burgerFive");
const navbarMenuOne = document.getElementById("menuOne");
const navbarMenuTwo = document.getElementById("menuTwo");
const navbarMenuThree = document.getElementById("menuThree");
const navbarMenuFour = document.getElementById("menuFour");
const navbarMenuFive = document.getElementById("menuFive");
const header = document.getElementById("header");
const headerTwo = document.getElementById("headerTwo");
const headerThree = document.getElementById("headerThree");
const headerFour = document.getElementById("headerFour");
const headerFive = document.getElementById("headerFive");

// Responsive Navbar Toggle
burgerMenuOne.addEventListener("click", function () {
	navbarMenuOne.classList.toggle("activeOne");
	burgerMenuOne.classList.toggle("activeOne");
});

burgerMenuTwo.addEventListener("click", function () {
	navbarMenuTwo.classList.toggle("activeTwo");
	burgerMenuTwo.classList.toggle("activeTwo");
});
burgerMenuThree.addEventListener("click", function () {
	navbarMenuThree.classList.toggle("activeThree");
	burgerMenuThree.classList.toggle("activeThree");
});
burgerMenuFour.addEventListener("click", function () {
	navbarMenuFour.classList.toggle("activeFour");
	burgerMenuFour.classList.toggle("activeFour");
});
burgerMenuFive.addEventListener("click", function () {
	navbarMenuFive.classList.toggle("activeFive");
	burgerMenuFive.classList.toggle("activeFive");
});
// 	header.classList.toggle("active");
// });
