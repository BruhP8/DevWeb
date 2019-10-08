window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

let carreArray = [];
let data = ["room 1", "room 2", "room 3", "room 4", "room 5", "room 6", "room 7",
					  "room 8", "room 9", "room 10", "room 11"];

const main = event => {
	document.body.style.backgroundColor = "black";
	console.log("MAIN");
	data.forEach(temp => {
		carreArray.push(CreateCarre(temp));
	});
	carreArray.forEach(tempd => {
		PlaceCarre(tempd);
	});
}

const PlaceCarre = (carre) => {
	carre.style.position = "absolute";
	let Coord = CoordFinder(carreArray.indexOf(carre));
	carre.style.left = Coord[0] + "px";
	console.log(Coord[0]);
	carre.style.top = Coord[1] - 20+ "px";
	console.log(Coord[1]);

}

const CreateCarre = (iteration) =>{
	let carre = document.createElement("div");
	carre.style.backgroundColor = "yellow";
	carre.innerHTML = iteration;
	carre.style.textAlign = "center";
	carre.style.verticalAlign = "middle";
	carre.addEventListener("click", event => {MoveDown()}); 
	document.body.appendChild(carre);
	return carre;
}

const CoordFinder = (index) =>{
	console.log(index)
	let x = 0;
	let y = (window.innerHeight/(6)) * (index+1);
	x = -Math.pow(y - window.innerHeight/2, 2)/1000 + 100;
	let size = 40 * x/100
	carreArray[index].style.width = (size * 2) + "px";
	carreArray[index].style.height = (size * 2) + "px";
	carreArray[index].style.borderRadius = size + "px";
	return [x, y, index];
}

const MoveDown = () =>{
	console.log("\n ---------------------------------- \n");
	data.push(data[0]);
	data.shift();
	document.body.innerHTML = "";
	carreArray.length = 0;
	data.forEach(temp => {
		carreArray.push(CreateCarre(temp));
	});
	carreArray.forEach(tempd => {
		PlaceCarre(tempd);
	});
}
