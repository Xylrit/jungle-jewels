const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener("click", function(){
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})

const nav = document.querySelector(".nav-container");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
	if (lastScrollY < window.scrollY) {
		nav.classList.add("nav--hidden");
	}
	else{
		nav.classList.remove("nav--hidden");
	}

	lastScrollY = window.scrollY;
});

const dropbtn = document.querySelector('.dropbtn')
const dropdownContent = document.querySelector('.dropdown-content')
const dropdownContainer = document.querySelector('.dropdown-container')

dropbtn.addEventListener("click", function(){
	dropdownContent.classList.toggle('is-active');
	dropdownContainer.classList.toggle('is-active');
})

document.getElementById("inquireBtn").onclick = function () {
	location.href = "contact.html";
}

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})