function getCommonElements(array1, array2) {

  let newArray =[];
  
  for (const number of array1){
  if(array2.includes(number)){
  newArray.push(number)
  }
  }
return newArray;

}
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [2, 4]);