class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        paper_counts = [0] * (n+1)

        for c in citations:
            paper_counts[min(n, c)] += 1
        
        h = n
        papers = paper_counts[n]
        
        while papers < h:
            h -= 1
            papers += paper_counts[h]
        
        return h
        # Time: O(n), Space: O(n)