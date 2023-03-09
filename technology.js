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

// getting buttons for mobile
let launchvehiclebtn = document.getElementById("launchvehiclebtn");
let spaceportbtn = document.getElementById("spaceportbtn");
let spacecapsulebtn = document.getElementById("spacecapsulebtn");
// getting images for mobile
let launchvehicleimg = document.getElementById("launchvehicleimg");
let spaceportimg = document.getElementById("spaceportimg");
let spacecapsuleimg = document.getElementById("spacecapsuleimg");
// getting labels for mobile
let launchvehicleLabel = document.getElementById("launchvehicleLabel");
let spaceportLabel = document.getElementById("spaceportLabel");
let spacecapsuleLabel = document.getElementById("spacecapsuleLabel");
// click events for mobile
// button 1
launchvehiclebtn.addEventListener("click", showLaunchVehicle);
function showLaunchVehicle() {
	if (launchvehicleimg.classList.contains("hidden")) {
		// adding indicator and checking others
		spacecapsulebtn.style.color = "white";
		spacecapsulebtn.style.backgroundColor = "";
		spaceportbtn.style.color = "white";
		spaceportbtn.style.backgroundColor = "";
		launchvehiclebtn.style.color = "black";
		launchvehiclebtn.style.backgroundColor = "white";
		// showing images
		launchvehicleimg.classList.remove("hidden");
		spaceportimg.classList.add("hidden");
		spacecapsuleimg.classList.add("hidden");
		// showing label
		launchvehicleLabel.classList.remove("hidden");
		spaceportLabel.classList.add("hidden");
		spacecapsuleLabel.classList.add("hidden");
	}
}
// button 2
spaceportbtn.addEventListener("click", showSpacePort);
function showSpacePort() {
	if (spaceportimg.classList.contains("hidden")) {
		// adding indicator and checking others
		spacecapsulebtn.style.color = "white";
		spacecapsulebtn.style.backgroundColor = "";
		spaceportbtn.style.color = "black";
		spaceportbtn.style.backgroundColor = "white";
		launchvehiclebtn.style.color = "white";
		launchvehiclebtn.style.backgroundColor = "";
		// showing images
		launchvehicleimg.classList.add("hidden");
		launchvehiclebtn.classList.remove("bg-white");
		spaceportimg.classList.remove("hidden");
		spacecapsuleimg.classList.add("hidden");
		// showing label
		launchvehicleLabel.classList.add("hidden");
		spaceportLabel.classList.remove("hidden");
		spacecapsuleLabel.classList.add("hidden");
	}
}
// button 3
spacecapsulebtn.addEventListener("click", showSpaceCapsule);
function showSpaceCapsule() {
	if (spacecapsuleimg.classList.contains("hidden")) {
		// adding indicator and checking others
		spacecapsulebtn.style.color = "black";
		spacecapsulebtn.style.backgroundColor = "white";
		spaceportbtn.style.color = "white";
		spaceportbtn.style.backgroundColor = "";
		launchvehiclebtn.style.color = "white";
		launchvehiclebtn.style.backgroundColor = "";
		// showing images
		launchvehicleimg.classList.add("hidden");
		launchvehiclebtn.classList.remove("bg-white");
		spaceportimg.classList.add("hidden");
		spacecapsuleimg.classList.remove("hidden");
		// showing label
		launchvehicleLabel.classList.add("hidden");
		spaceportLabel.classList.add("hidden");
		spacecapsuleLabel.classList.remove("hidden");
	}
}

// desktop script
// getting images for desktop
let launchvehicleimgDesktop = document.getElementById("launchvehicleimgDesktop");
let spaceportimgDesktop = document.getElementById("spaceportimgDesktop");
let spacecapsuleimgDesktop = document.getElementById("spacecapsuleimgDesktop");
// getting labels for desktop
let launchvehicleLabelDesktop = document.getElementById("launchvehicleLabelDesktop");
let spaceportLabelDesktop = document.getElementById("spaceportLabelDesktop");
let spacecapsuleLabelDesktop = document.getElementById("spacecapsuleLabelDesktop");

// creating click functions for button 1
let launchvehiclebtnDesktop = document.getElementById("launchvehiclebtnDesktop");
launchvehiclebtnDesktop.addEventListener("click", showLaunchVehicleDesktop);
function showLaunchVehicleDesktop() {
	if (launchvehicleLabelDesktop.classList.contains("hidden")) {
		// adding indicators
		launchvehiclebtnDesktop.style.color = "black";
		launchvehiclebtnDesktop.style.backgroundColor = "white";
		spaceportbtnDesktop.style.color = "white";
		spaceportbtnDesktop.style.backgroundColor = "";
		launchvehiclebtnDesktop.classList.remove("bg-white");
		spacecapsulebtnDesktop.style.color = "white";
		spacecapsulebtnDesktop.style.backgroundColor = "";
		// showing label
		launchvehicleLabelDesktop.classList.remove("hidden");
		spaceportLabelDesktop.classList.add("hidden");
		spacecapsuleLabelDesktop.classList.add("hidden");
		// showing image
		launchvehicleimgDesktop.classList.remove("hidden");
		spaceportimgDesktop.classList.add("hidden");
		spacecapsuleimgDesktop.classList.add("hidden");
	}
}

// creating click function for button 2
let spaceportbtnDesktop = document.getElementById("spaceportbtnDesktop");
spaceportbtnDesktop.addEventListener("click", showSpacePortDesktop);
function showSpacePortDesktop() {
	if (spaceportLabelDesktop.classList.contains("hidden")) {
		// adding indicators
		launchvehiclebtnDesktop.style.color = "white";
		launchvehiclebtnDesktop.style.backgroundColor = "";
		spaceportbtnDesktop.style.color = "black";
		spaceportbtnDesktop.style.backgroundColor = "white";
		launchvehiclebtnDesktop.classList.remove("bg-white");
		spacecapsulebtnDesktop.style.color = "white";
		spacecapsulebtnDesktop.style.backgroundColor = "";
		// showing label
		launchvehicleLabelDesktop.classList.add("hidden");
		spaceportLabelDesktop.classList.remove("hidden");
		spacecapsuleLabelDesktop.classList.add("hidden");
		// showing image
		launchvehicleimgDesktop.classList.add("hidden");
		spaceportimgDesktop.classList.remove("hidden");
		spacecapsuleimgDesktop.classList.add("hidden");
	}
}

// creating click function for button 3
let spacecapsulebtnDesktop = document.getElementById("spacecapsulebtnDesktop");
spacecapsulebtnDesktop.addEventListener("click", showSpaceCapsuleDesktop);
function showSpaceCapsuleDesktop() {
	if (spacecapsuleLabelDesktop.classList.contains("hidden")) {
		// adding indicators
		launchvehiclebtnDesktop.style.color = "white";
		launchvehiclebtnDesktop.style.backgroundColor = "";
		spaceportbtnDesktop.style.color = "white";
		spaceportbtnDesktop.style.backgroundColor = "";
		launchvehiclebtnDesktop.classList.remove("bg-white");
		spacecapsulebtnDesktop.style.color = "black";
		spacecapsulebtnDesktop.style.backgroundColor = "white";
		// showing labels
		launchvehicleLabelDesktop.classList.add("hidden");
		spaceportLabelDesktop.classList.add("hidden");
		spacecapsuleLabelDesktop.classList.remove("hidden");
		// showing image
		launchvehicleimgDesktop.classList.add("hidden");
		spaceportimgDesktop.classList.add("hidden");
		spacecapsuleimgDesktop.classList.remove("hidden");
	}
}

// animations
anime({
	targets: "#desktopNav",
	opacity: 1,
	duration: 4000,
	delay: 100,
});

anime({
	targets: "#bodyMobile",
	translateY: 30,
	opacity: 1,
	duration: 3000,
	delay: 100,
});

anime({
	targets: "#bodyDesktop",
	opacity: 1,
	duration: 3000,
	delay: 100,
});
