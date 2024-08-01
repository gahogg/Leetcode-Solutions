class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        x, y = m-1, n-1

        for z in range(m + n - 1, -1, -1):
            if x < 0:
                nums1[z] = nums2[y]
                y -= 1
            elif y < 0:
                break
            elif nums1[x] > nums2[y]:
                nums1[z] = nums1[x]
                x -= 1
            else:
                nums1[z] = nums2[y]
                y -= 1
        
        # Time: O(n + m)
        # Space: O(1)