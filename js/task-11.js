function calculateEngravingPrice(message, pricePerWord) {
  
  const words = message.split(" ");
  
  const totalPrice = words.length * pricePerWord;

  return totalPrice;


 
}
calculateEngravingPrice('Веб-разработка это творческая работа', 20);
calculateEngravingPrice('Веб-разработка это творческая работа', 40)