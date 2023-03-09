// creating menu
let toggle = document.getElementById("menuContainer");
toggle.addEventListener("click", openOrClose);
function openOrClose() {
	let menu = document.getElementById("mobileMenu");
	let image = document.getElementById("mobileImage");
	let stroke1 = document.getElementById("stroke1");
	let stroke2 = document.getElementById("stroke2");
	let stroke3 = document.getElementById("stroke3");
	let main = document.getElementById("main");
	if (menu.classList.contains("hidden")) {
		menu.classList.remove("hidden");
		image.classList.add("blur-md");
		stroke1.style.transform = "rotate(45deg)";
		stroke3.style.transform = "rotate(-45deg)";
		stroke3.classList.add("absolute");
		stroke2.classList.add("hidden");
		toggle.classList.add("z-10");
		main.classList.add("blur-md");
		// menu.classList.remove("translate-x-full");
		// menu.classList.add("translate-x-0");
	} else if (!menu.classList.contains("hidden")) {
		menu.classList.add("hidden");
		image.classList.remove("blur-md");
		stroke1.style.transform = "";
		stroke3.style.transform = "";
		stroke3.classList.remove("absolute");
		stroke2.classList.remove("hidden");
		main.classList.remove("blur-md");
		// menu.classList.add("-translate-x-full");
		// menu.classList.remove("translate-x-0");
	}
}

// animations
anime({
	targets: "#desktopNav",
	opacity: 1,
	duration: 4000,
	delay: 100,
});
// body animation
anime({
	targets: "#main",
	translateY: 50,
	opacity: 1,
	duration: 5000,
	delay: 100,
});
