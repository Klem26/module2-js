function calculateTotalPrice(order) {
  let total = 0;
  

  for (const value  of order) {
    total += value;
  }

  
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);