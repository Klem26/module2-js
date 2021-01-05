function findNumber(start, end, divisor) {
 
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
       return i;
    }
  }

  return number;
  
}
findNumber(2, 6, 5);
findNumber(8, 17, 3);