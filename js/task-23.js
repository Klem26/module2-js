function filterArray(numbers, value) {

let arr = [];

for (const number of numbers) {
  if(number > value){
    
	arr.push(number);
}
}
return (arr);
}
filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);