// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//MySolution

function solution(str){
  // Add an underscore to the end of the string if it has an odd number of characters
  if (str.length % 2 !== 0) {
    str += '_';
  }

  // Split the string into pairs of two characters
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }

  return pairs;
}