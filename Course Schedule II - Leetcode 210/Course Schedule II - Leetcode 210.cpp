class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<int> order, inDegree(numCourses, 0);
        unordered_map<int, vector<int>> map;
        queue<int> queue;
        
        for (auto& pre : prerequisites) {
            int target = pre[0], preCourse = pre[1];
            map[preCourse].push_back(target);
            inDegree[target] += 1;
        }
        for (int i = 0; i < numCourses; ++i) {
            if (inDegree[i] == 0) {
                queue.push(i);
            }
        }
        while (!queue.empty()) {
            int node = queue.front();
            queue.pop();
            order.push_back(node);
            
            if (map.find(node) != map.end()) {
                for (int target : map[node]) {
                    inDegree[target] -= 1;
                    if (inDegree[target] == 0) {
                        queue.push(target);
                    }
                }
            }
        }
        return order.size() == numCourses ? order : vector<int>();
    }
};