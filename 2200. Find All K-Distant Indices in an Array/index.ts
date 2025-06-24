function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  // Check if the input array is empty
  if (nums.length === 0) {
    // If empty, return an empty array
    return [];
  } else {
    // Initialize an array to store the result indices
    let arr: number[] = [];
    // Variable to keep track of where to start searching for indices
    let startIndex: number = 0;
    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
      // Check if the current element is equal to the key
      if (nums[i] === key) {
        // Loop from startIndex to the end of the array
        for (let j = startIndex; j < nums.length; j++) {
          // Check if the distance between j and i is less than or equal to k
          if (Math.abs(j - i) <= k) {
            // If yes, add the index j to the result array
            arr.push(j);
          }
        }
        // Update startIndex to avoid adding duplicate indices
        startIndex = arr[arr.length - 1] + 1;
      }
    }
    // Return the array of indices that meet the condition
    return arr;
  }
}
// Example input array
const nums: number[] = [3, 4, 9, 1, 3, 9, 5];
// The key to search for in the array
const key: number = 9;
// The maximum allowed distance from the key
const k: number = 1;
// Call the function and store the result
const answer: number[] = findKDistantIndices(nums, key, k);
// Print the result to the console
console.log(answer);
