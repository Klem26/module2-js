function getEvenNumbers(start, end) {
  
  
  let newArray =[];

for(let i = start; i <= end; i+= 1 ){
if (i % 2 === 0) {
  newArray.push(i);
}
  
}
     return newArray;
   
}
 getEvenNumbers(3, 11) //возвращает [4, 6, 8, 10].
 getEvenNumbers(6, 12) //возвращает [6, 8, 10, 12].