function* printWord(str){
	let array = str.split(' ');
	for (var i = 0;i < array.length; i++){
		console.log(array[i])
	}
}

';lkiuyfdxzw44wconst printedWord = printWord('All I know is something like a bird within her sang');
while(printedWord.next().done == false){
	console.log();
}


