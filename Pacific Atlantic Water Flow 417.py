class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        # Initialize stacks and seen sets for both Pacific and Atlantic oceans
        p_stk = []  # Stack for Pacific ocean
        p_seen = set()  # Seen cells for Pacific ocean
        a_stk = []  # Stack for Atlantic ocean
        a_seen = set()  # Seen cells for Atlantic ocean
        m, n = len(heights), len(heights[0])  # Dimensions of the grid

        # Fill the Pacific stack with the border cells that can reach the Pacific
        for j in range(n):
            p_stk.append((0,j))
            p_seen.add((0,j))
        
        for i in range(1, m):
            p_stk.append((i,0))
            p_seen.add((i,0))
        
        # Fill the Atlantic stack with the border cells that can reach the Atlantic
        for i in range(m):
            a_stk.append((i,n-1))
            a_seen.add((i,n-1))
        
        for j in range(n-1):
            a_stk.append((m-1,j))
            a_seen.add((m-1,j))
        
        # Helper function to traverse the grid and find all cells that can reach the given ocean
        def get_coords(stk, seen):
            coords = set()  # Set to hold coordinates of cells that can reach the ocean
            while stk:
                i, j = stk.pop()
                coords.add((i,j))
                # Check all four possible directions
                for i_off, j_off in [(0,1), (1,0), (-1,0), (0,-1)]:
                    r, c = i + i_off, j + j_off
                    # Check if the neighbor is within bounds and if it's elevation is higher or equal
                    if 0 <= r < m and 0 <= c < n and \
                     heights[r][c] >= heights[i][j] and (r,c) not in seen:
                        seen.add((r,c))
                        stk.append((r,c))
            return coords
        
        # Obtain coordinates that can reach the Pacific and Atlantic oceans
        p_coords = get_coords(p_stk, p_seen)
        a_coords = get_coords(a_stk, a_seen)

        # Return the intersection of the two sets; these coordinates can reach both oceans
        return p_coords.intersection(a_coords)
