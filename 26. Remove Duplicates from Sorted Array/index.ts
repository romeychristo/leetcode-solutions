function removeDuplicates(nums: number[]): number {
  // If the array is empty, return 0
  if (nums.length === 0) {
    return 0;
  } else {
    let i = 1; // Pointer for the next unique element
    // Start from the second element and iterate through the array
    for (let j = 1; j < nums.length; j++) {
      // If current element is not equal to the previous one, it's unique
      if (nums[j] !== nums[j - 1]) {
        nums[i] = nums[j]; // Place the unique element at index i
        i += 1; // Move to the next position for unique elements
      }
    }
    // Return the number of unique elements
    return i;
  }
}

const nums: number[] = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6];
const answer: number = removeDuplicates(nums);
console.log(answer); // Output the count of unique elements
