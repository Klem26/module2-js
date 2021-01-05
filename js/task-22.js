function createArrayOfNumbers(min, max) {
  const numbers = [];
 
   for (let i = min; i <= max ; i+= 1){
    
    numbers.push(i);
    
  }

  return numbers;
}
 createArrayOfNumbers(14, 17) // [14, 15, 16, 17].
 createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34].