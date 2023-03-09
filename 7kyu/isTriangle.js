// 

//My Solution

function isTriangle(a,b,c) {
  
  if (a + b > c && b + c > a && c + a > b) {

    if (a > 0 && b > 0 && c > 0) {
    
       return true; 
    }
  }


   return false; }