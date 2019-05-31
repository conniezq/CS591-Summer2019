function* fibs () {
	let [val1, val2, result] = [0, 1, 0];
	yield result
	while (true) {
		result = val1 + val2;
		val1 = val2;
		val2 = result;
		yield result;
	}
}

function* evenFibs(){
	let myFibs = fibs();
	while(true){
		let val = myFibs.next();
		while (val.value % 2  != 0) {
			val = myFibs.next();
		}
		yield val.value;
	}

}

let myEvenFibs = evenFibs();
let count = 5;
while (count --> 0) {
	console.log(myEvenFibs.next().value);
}