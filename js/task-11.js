function calculateEngravingPrice(message, pricePerWord) {
  
  const words = message.split(" ");
  
  const totalPrice = words.length * pricePerWord;

  return totalPrice;


 
}
// function calculateEngravingPrice(message, pricePerWord) {
 

// const countWord = message.split(' ').length

// const priceTotal = countWord *pricePerWord
  
//   return priceTotal


// }
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));