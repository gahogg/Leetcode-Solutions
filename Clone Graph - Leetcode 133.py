from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        if not node:
            return None

        start = node
        o_to_n = {}
        stk = [start]
        visited = set()
        visited.add(start)

        while stk:
            node = stk.pop()
            o_to_n[node] = Node(val=node.val)

            for nei in node.neighbors:
                if nei not in visited:
                    visited.add(nei)
                    stk.append(nei)

        for old_node, new_node in o_to_n.items():
            for nei in old_node.neighbors:
                new_nei = o_to_n[nei]
                new_node.neighbors.append(new_nei)

        return o_to_n[start]

# Time Complexity: O(V+E)
# Space Complexity: O(V)
