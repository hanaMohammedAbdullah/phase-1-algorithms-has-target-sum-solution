function hasTargetSum(array, target) {
  const seen = new Set();
  for (const num of array) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  
this new function has a time complexity of O(n) because it only loops through the array once


*/

/* 
  Add your pseudocode here
    create an empty set
    loop through the array
      if the set has the difference between the target and the current number
        return true
      add the current number to the set
    return false

*/

/*
  Add written explanation of your solution here

    The solution uses a set to store the numbers we've seen so far. We loop through the array, and for each number, we check if the set has the difference between the target and the current number. If it does, we return true. If it doesn't, we add the current number to the set. 
    If we finish the loop without finding a match, we return false.

    The  solution is more efficient because it only loops through the array once, and the time complexity is O(n) instead of O(n^2).
    
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
