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
		stroke1.style.transform = "rotate(45deg)";
		stroke3.style.transform = "rotate(-45deg)";
		stroke3.classList.add("absolute");
		stroke2.classList.add("hidden");
		toggle.classList.add("z-10");
		// menu.classList.remove("translate-x-full");
		// menu.classList.add("translate-x-0");
	} else if (!menu.classList.contains("hidden")) {
		menu.classList.add("hidden");
		stroke1.style.transform = "";
		stroke3.style.transform = "";
		stroke3.classList.remove("absolute");
		stroke2.classList.remove("hidden");
		// menu.classList.add("-translate-x-full");
		// menu.classList.remove("translate-x-0");
	}
}

// getting destination links
let moon = document.getElementById("moonLink");
let mars = document.getElementById("marsLink");
let europa = document.getElementById("europaLink");
let titan = document.getElementById("titanLink");
// // getting sections
// let moonSection = document.getElementById("moonSection");
// let titanSection = document.getElementById("titanSection");
// let marsSection = document.getElementById("marsSection");
// let europaSection = document.getElementById("europaSection");

// getting images
let marsimg = document.getElementById("marsImg");
let moonimg = document.getElementById("moonImg");
let europaimg = document.getElementById("europaImg");
let titanimg = document.getElementById("titanImg");

// getting labels
let moonLabel = document.getElementById("moonLabel");
let marsLabel = document.getElementById("marsLabel");
let europaLabel = document.getElementById("europaLabel");
let titanLabel = document.getElementById("titanLabel");

// getting distance
let moonDistance = document.getElementById("moonDistance");
let marsDistance = document.getElementById("marsDistance");
let europaDistance = document.getElementById("europaDistance");
let titanDistance = document.getElementById("titanDistance");

// showing moon only
moon.addEventListener("click", showMoon);
function showMoon() {
	if (moonimg.classList.contains("hidden")) {
		// showing moon
		moonimg.classList.remove("hidden");
		moonLabel.classList.remove("hidden");
		moonDistance.classList.remove("hidden");
		// hidding mars information
		marsimg.classList.add("hidden");
		marsLabel.classList.add("hidden");
		marsDistance.classList.add("hidden");
		// hidding titan information
		titanimg.classList.add("hidden");
		titanLabel.classList.add("hidden");
		titanDistance.classList.add("hidden");
		// hidding europa
		europaimg.classList.add("hidden");
		europaLabel.classList.add("hidden");
		europaDistance.classList.add("hidden");
	}
}

// showing mars only
mars.addEventListener("click", showMars);
function showMars() {
	if (marsimg.classList.contains("hidden")) {
		// removing hidden moon information
		moonimg.classList.add("hidden");
		moonLabel.classList.add("hidden");
		moonDistance.classList.add("hidden");
		// showing mars
		marsimg.classList.remove("hidden");
		marsLabel.classList.remove("hidden");
		marsDistance.classList.remove("hidden");
		// hidding titan information
		titanimg.classList.add("hidden");
		titanLabel.classList.add("hidden");
		titanDistance.classList.add("hidden");
		// hidding europa
		europaimg.classList.add("hidden");
		europaLabel.classList.add("hidden");
		europaDistance.classList.add("hidden");
	}
}

// showing europa only
europa.addEventListener("click", showEuropa);
function showEuropa() {
	if (europaimg.classList.contains("hidden")) {
		// removing hidden moon information
		moonimg.classList.add("hidden");
		moonLabel.classList.add("hidden");
		moonDistance.classList.add("hidden");
		// hidding mars information
		marsimg.classList.add("hidden");
		marsLabel.classList.add("hidden");
		marsDistance.classList.add("hidden");
		// hidding titan information
		titanimg.classList.add("hidden");
		titanLabel.classList.add("hidden");
		titanDistance.classList.add("hidden");
		// showing europa
		europaimg.classList.remove("hidden");
		europaLabel.classList.remove("hidden");
		europaDistance.classList.remove("hidden");
	}
}

// showing titan only
titan.addEventListener("click", showTitan);
function showTitan() {
	if (titanimg.classList.contains("hidden")) {
		// removing hidden moon information
		moonimg.classList.add("hidden");
		moonLabel.classList.add("hidden");
		moonDistance.classList.add("hidden");
		// hidding mars information
		marsimg.classList.add("hidden");
		marsLabel.classList.add("hidden");
		marsDistance.classList.add("hidden");
		// hidding titan information
		titanimg.classList.remove("hidden");
		titanLabel.classList.remove("hidden");
		titanDistance.classList.remove("hidden");
		// hidding europa
		europaimg.classList.add("hidden");
		europaLabel.classList.add("hidden");
		europaDistance.classList.add("hidden");
	}
}

// animation
anime({
	targets: "#moonSection",
	translateY: -20,
	duration: 2000,
});

anime({
	targets: "#desktopNav",
	opacity: 1,
	duration: 4000,
	delay: 100,
});
