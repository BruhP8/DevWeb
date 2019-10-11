window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = event => {
	
	console.log("MAIN");
	let p1 = [0, 10];
	let p2 = [5, -6];
	let p3 = [7, 63];

	let resultArray = findCircle(p1, p2, p3);
	createCircle(resultArray[0], resultArray[1], resultArray[2]);	
}

const createCircle =  (x, y, radius) => {
	let canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);

	let ctx = canvas.getContext("2d");	
	ctx.beginPath();
	ctx.arc(x, y, radius,0, 2 * Math.PI, false);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
	return ctx
}


/* --------------------------------------------------- 
					MATH
   --------------------------------------------------- */

let findCircle = (p1, p2, p3) =>{
	let xc = ((((Math.pow(p3[0], 2) - Math.pow(p2[0], 2)) + (Math.pow(p3[1], 2) - Math.pow(p2[1], 2))) / (2 * (p3[1] - p2[1]))
		   	- (((Math.pow(p2[0], 2) - Math.pow(p1[0], 2)) + (Math.pow(p2[1], 2) - Math.pow(p1[1], 2))) / (2 * (p2[1] - p1[1]))))
		   / ( ((p3[0] - p2[0]) / (p3[1] - p2[1])) -  ((p2[0] - p1[0]) / (p2[1] - p1[1]))));

	let yc = ((-((p2[0] - p1[0]) / (p2[1] - p1[1])) * xc)
			+ (((Math.pow(p2[0], 2) - Math.pow(p1[0], 2)) + (Math.pow(p2[1], 2) - Math.pow(p1[1], 2))) / (2 * (p2[1] - p1[1]))));

	let r = Math.sqrt( Math.pow((p1[0] - xc), 2) + Math.pow((p1[1] - yc), 2));
	return [xc, yc, r];
}