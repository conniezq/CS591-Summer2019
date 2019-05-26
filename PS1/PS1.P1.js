const sortedString = str =>{
  var array = str.split('');
  var temp;
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.join('');
}


console.log(sortedString('supercalifragilisticexpialidocious'));
