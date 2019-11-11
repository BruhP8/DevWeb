window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = async () => {
	
	console.log("MAIN");
	let result = await fetch("https://ilusio.dev/base/gettest");
	let response = await result.json();
	console.log(response);

	/*  Going to post test */

	let data = {number: 5};
	let send = Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

	result = await fetch("https://ilusio.dev/base/posttest", {
		method : "POST",
		headers: {
		  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body:send
	});
	response = await result.json();
	console.log(response);
}

class MyComponent {
	
	constructor(name) {
		console.log("my name is", name);
	}
	
}