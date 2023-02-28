// 

//My Solution

function isTriangle(a,b,c) {
  // Check if the sum of any two sides is greater than the third side
  if (a + b > c && b + c > a && c + a > b) {
    // Check if all sides are greater than 0
    if (a > 0 && b > 0 && c > 0) {
     // A triangle can be built with these sides
       return true; 
    }
  }
 // A triangle cannot be built with these sides

   return false;