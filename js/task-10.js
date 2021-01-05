function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);
  
 
  return words;
}

splitMessage('Манго спешит на поезд', ' ');
splitMessage('лучшее_за_неделю', '_')