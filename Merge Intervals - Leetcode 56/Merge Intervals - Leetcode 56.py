class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda interval: interval[0])
        merged = []

        for interval in intervals:
            if not merged or merged[-1][1] < interval[0]:
                merged.append(interval)
            else:
                merged[-1] = [merged[-1][0], max(merged[-1][1], interval[1])]
        
        return merged
        # Time: O(n log n)
        # Space: O(n)


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])  # Sort by start time
        i = 0  # Index to track merged intervals
        n = len(intervals)

        for j in range(1, n):
            # Check if the current interval overlaps with the previous one
            if intervals[i][1] >= intervals[j][0]:  
                intervals[i][1] = max(intervals[i][1], intervals[j][1])  # Merge
            else:
                i += 1
                intervals[i] = intervals[j]  # Move next non-overlapping interval

        return intervals[:i+1]  # Return the relevant merged portion

        # Time: O(n log n)
        # Space: O(1)
