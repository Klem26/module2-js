function findLongestWord(string) {
    let words ;
 
  
  words = string.split(' ');
  
  let longestWord = words[0];
  
  for (const word of words) {
    
    if (word.length > longestWord.length){
      longestWord = word ;
    }
  }
  
    return longestWord; 
    
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');
findLongestWord('The quick brown fox  jumped over the lazy dog');