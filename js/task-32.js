function includes(array, value) {
   
  
  
    for (const number of array) {
        if (number === value) {
  
            return true;
        }
    }
    return false;
}

includes([1, 2, 3, 4, 5], 3);
includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран');