window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = event => {
	
	console.log("MAIN");
	
	let carre = document.createElement("div");
	document.body.appendChild(carre);
	carre.style.height = "10%";
	carre.style.width = "40%";
	carre.style.backgroundColor = "blue";

	carre.addEventListener("mousemove", printlol);
}

const printlol = () => {
	console.log("click ta mere");
}