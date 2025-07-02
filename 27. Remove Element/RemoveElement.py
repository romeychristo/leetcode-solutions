from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        index = 0

        for num in nums:
            if num != val:
                nums[index] = num
                index += 1

        # print(index)
        return index


nums: List[int] = [1, 2, 3, 4, 5]

val: int = 2

solution = Solution()

k: int = solution.removeElement(nums, val)

