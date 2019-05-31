const mainFunction = (str,func) => func(str);

const function1 = str =>{
	var array = str.split('c');
	for(var i = 1; i < array.length; i++){
		array[i] = 'c' + array[i];
	}
	return array;
}

const function2 = str =>{
	var myObj = new Object();
	myObj.originalString = str;
	var numberReplaced = 0;
	const modify = str =>{
	  var array = str.split('a');
		numberReplaced = array.length - 1;
		for(var i = 1; i < array.length; i++){
			array[i] = 'A' + array[i];
		}
		return array.join('');
	}
	myObj.modifiedString = modify(str);
	myObj.numberReplaced = numberReplaced;
	myObj.length = str.length;
	return myObj;
}

console.log(mainFunction('supercalifragilisticexpialidocious',function1));
console.log(mainFunction('supercalifragilisticexpialidocious',function2));