import heapq
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # Prim's Algorithm
        n = len(points)
        g = defaultdict(list)
        for i in range(n):
            xi, yi = points[i]
            for j in range(i+1, n):
                xj, yj = points[j]
                dist = abs(xi-xj) + abs(yi-yj)
                g[i].append((j, dist))
                g[j].append((i, dist))
        
        total_cost = 0
        seen = set()
        min_heap = [(0, 0)] # (dist, node)

        while len(seen) < n:
            dist, node = heapq.heappop(min_heap)
            if node in seen:
                continue
            total_cost += dist
            seen.add(node)

            for nei_node, nei_dist in g[node]:
                if nei_node not in seen:
                    heapq.heappush(min_heap, (nei_dist, nei_node))
        
        return total_cost
        # Time: O(n^2 log(n))
        #    or O(E log(E)) where E is the number of edges, which is n^2
        # Space: O(n^2) or O(E)
