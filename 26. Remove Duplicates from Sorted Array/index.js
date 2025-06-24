function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    else {
        var i = 1;
        for (var j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[j - 1]) {
                nums[i] = nums[j];
                i += 1;
            }
        }
        return i;
    }
}
var nums = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6];
var answer = removeDuplicates(nums);
console.log(answer);
