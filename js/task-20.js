function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    
    console.log(order[i]);
    
     total += order[i];
  }

  
  return total;
}
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([12, 85, 37, 4]);