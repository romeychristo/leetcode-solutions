class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # return haystack.find(needle)
        hLen: int = len(haystack)
        nLen: int = len(needle)

        if nLen == 0:
            return 0

        for i in range(hLen - nLen + 1):
            if (haystack[i : i + nLen]) == needle:
                return i

        return -1


solution = Solution()


haystack: str = "sadbutsad"

needle: str = "sad"

k: int = solution.strStr(haystack, needle)
