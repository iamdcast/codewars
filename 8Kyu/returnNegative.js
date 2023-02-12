// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// Input:  1  =>  Output: -1
// Input: -5  =>  Output: -5
// Input:  0  =>  Output:  0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//My Solution

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}