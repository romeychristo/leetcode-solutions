function findKDistantIndices(nums, key, k) {
    if (nums.length === 0) {
        return [];
    }
    else {
        var arr = [];
        var startIndex = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] === key) {
                for (var j = startIndex; j < nums.length; j++) {
                    if (Math.abs(j - i) <= k) {
                        arr.push(j);
                    }
                }
                startIndex = arr[arr.length - 1] + 1;
            }
        }
        return arr;
    }
}
var nums = [3, 4, 9, 1, 3, 9, 5];
var key = 9;
var k = 1;
var answer = findKDistantIndices(nums, key, k);
console.log(answer);
