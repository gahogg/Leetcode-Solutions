import heapq
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # Djikstra's Algorithm
        graph = defaultdict(list)
        for u, v, time in times:
            graph[u].append((v, time))
        
        min_times = {}
        min_heap = [(0, k)] # (distance from source to node, node)

        while min_heap:
            time_k_to_i, i = heapq.heappop(min_heap)
            if i in min_times:
                continue
            
            min_times[i] = time_k_to_i
            for nei, nei_time in graph[i]:
                if nei not in min_times:
                    heapq.heappush(min_heap, (time_k_to_i + nei_time, nei))
        
        if len(min_times) == n:
            return max(min_times.values())
        else:
            return -1
        # Time: O((V + E) log (V))
        # Space: O(V + E)
