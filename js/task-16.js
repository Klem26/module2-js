function makeArray(firstArray, secondArray, maxLength) {
   
  
  const newArray = firstArray.concat(secondArray);
  
  if (newArray.length > maxLength) {
   
  return newArray.slice(0,maxLength);
  }
  
   return newArray;
    
  
}
makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2);