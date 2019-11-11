window.addEventListener("load", event => {
	console.log("loaded");
	main();
});


var fakeTab = new Array(500).fill(undefined);
var date = new Date(Date.now());

async function main () {
	faker.locale = "fr";
	console.log("MAIN");
	//await sleep(5000);
	makeFake();
	//console.log(fakeTab);
	//console.log(findUsersByAge(fakeTab, 5));
	console.log( await findUsersByFirstName(fakeTab, "Thomas"));
}

function sleep(ms){
	let callback, prom = new Promise(resolve => callback = resolve);
	setTimeout(callback, ms);
	return prom;
}

function makeFake (){
	let gender = ["male", "female"]
	fakeTab = fakeTab.map( val => val = {firstName : faker.name.firstName(), 
		      lastName : faker.name.lastName(), address : faker.address.country(),
		      age :  Math.floor(Math.random() * 100),
		      gender : faker.random.arrayElement(gender)});
}

async function findUsersByAge (users, age){
	await sleep(50);
	return users.filter(user => user.age < age);
}

async function findUsersByFirstName (users, name){
	await sleep(50);
	return users.filter(user => user.firstName == name);
}