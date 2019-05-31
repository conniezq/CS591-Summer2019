function* printWord(str){
	let array = str.split(' ');
	for (let i = 0;i < array.length; i++){
		console.log(array[i])
	}
}

const printedWord = printWord('All I know is something like a bird within her sang');
while(printedWord.next().done == false){
	console.log();
}


