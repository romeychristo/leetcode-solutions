function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  } else {
    let i = 1;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[j - 1]) {
        nums[i] = nums[j];
        i += 1;
      }
    }

    return i;
  }
}

const nums: number[] = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6];
const answer: number = removeDuplicates(nums);
console.log(answer);
