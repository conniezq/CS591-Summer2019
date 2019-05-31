const evaluate = str =>{
	var array = str.split('');
	if(array[1] === '+'){
		return Number(array[0]) + Number(array[2]);
	} 
	else if(array[1] === '-'){
		return Number(array[0]) - Number(array[2]);
	} 
	else if(array[1] === '*'){
		return Number(array[0]) * Number(array[2]);
	} 
	else if(array[1] === '/'){
		return Number(array[0]) / Number(array[2]);
	} 
}

let operator = expression => evaluate(expression);

const expression1 = '4+2';
const expression2 = '5*7';
const expression3 = '6-1';
const expression4 = '9/2';

console.log(`${expression1} = ${operator(expression1)}`) 
console.log(`${expression2} = ${operator(expression2)}`) 
console.log(`${expression3} = ${operator(expression3)}`) 
console.log(`${expression4} = ${operator(expression4)}`) 

