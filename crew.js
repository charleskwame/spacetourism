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

// getting radio inputs
let radiobtn1 = document.getElementById("radiobtn1");
let radiobtn2 = document.getElementById("radiobtn2");
let radiobtn3 = document.getElementById("radiobtn3");
let radiobtn4 = document.getElementById("radiobtn4");

// getting images
let commanderimg = document.getElementById("commanderimg");
let specialistimg = document.getElementById("specialistimg");
let pilotimg = document.getElementById("pilotimg");
let flightengineerimg = document.getElementById("flightengineerimg");

// getting labels
let commanderLabel = document.getElementById("commanderLabel");
let specialistLabel = document.getElementById("specialistLabel");
let pilotLabel = document.getElementById("pilotLabel");
let flightengineerLabel = document.getElementById("flightengineerLabel");

// reseting all buttons on reload
window.onload = () => {
	radiobtn1.checked = true;
	radiobtn2.checked = false;
	radiobtn3.checked = false;
	radiobtn4.checked = false;
};

// creating functions to check if selected or not
radiobtn1.addEventListener("click", selectOne);
function selectOne() {
	if ((radiobtn1.checked = true)) {
		radiobtn2.checked = false;
		radiobtn3.checked = false;
		radiobtn4.checked = false;
		// showing commander img
		commanderimg.classList.remove("hidden");
		specialistimg.classList.add("hidden");
		pilotimg.classList.add("hidden");
		flightengineerimg.classList.add("hidden");
		// showing commander label
		commanderLabel.classList.remove("hidden");
		specialistLabel.classList.add("hidden");
		pilotLabel.classList.add("hidden");
		flightengineerLabel.classList.add("hidden");
	}
}

// button2
radiobtn2.addEventListener("click", selectTwo);
function selectTwo() {
	if ((radiobtn2.checked = true)) {
		radiobtn1.checked = false;
		radiobtn3.checked = false;
		radiobtn4.checked = false;
		// showing specialist img
		commanderimg.classList.add("hidden");
		specialistimg.classList.remove("hidden");
		pilotimg.classList.add("hidden");
		flightengineerimg.classList.add("hidden");
		// showing specialist label
		commanderLabel.classList.add("hidden");
		specialistLabel.classList.remove("hidden");
		pilotLabel.classList.add("hidden");
		flightengineerLabel.classList.add("hidden");
	}
}

// button3
radiobtn3.addEventListener("click", selectThree);
function selectThree() {
	if ((radiobtn3.checked = true)) {
		radiobtn1.checked = false;
		radiobtn2.checked = false;
		radiobtn4.checked = false;
		// showing pilot img
		commanderimg.classList.add("hidden");
		specialistimg.classList.add("hidden");
		pilotimg.classList.remove("hidden");
		flightengineerimg.classList.add("hidden");
		// showing pilot label
		commanderLabel.classList.add("hidden");
		specialistLabel.classList.add("hidden");
		pilotLabel.classList.remove("hidden");
		flightengineerLabel.classList.add("hidden");
	}
}

// button4
radiobtn4.addEventListener("click", selectFour);
function selectFour() {
	if ((radiobtn4.checked = true)) {
		radiobtn1.checked = false;
		radiobtn3.checked = false;
		radiobtn2.checked = false;
		// showing engineer img
		commanderimg.classList.add("hidden");
		specialistimg.classList.add("hidden");
		pilotimg.classList.add("hidden");
		flightengineerimg.classList.remove("hidden");
		// showing flight engineer label
		commanderLabel.classList.add("hidden");
		specialistLabel.classList.add("hidden");
		pilotLabel.classList.add("hidden");
		flightengineerLabel.classList.remove("hidden");
	}
}

// animations
anime({
	targets: "#main",
	translateY: 50,
	opacity: 1,
	duration: 5000,
	delay: 100,
});

anime({
	targets: "#desktopNav",
	opacity: 1,
	duration: 4000,
	delay: 100,
});

anime({
	targets: "#crew",
	translateY: 20,
	opacity: 1,
	duration: 5000,
	delay: 100,
});
