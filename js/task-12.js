function makeStringFromArray(array, delimeter) {
  let string;
  
  string = array.join(delimeter);
 

  return string;
}

makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '');
makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ')