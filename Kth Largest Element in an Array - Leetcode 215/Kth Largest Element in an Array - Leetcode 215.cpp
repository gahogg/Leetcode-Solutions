#include <vector>
#include <queue>
#include <algorithm>

class Solution {
public:
    int findKthLargest(std::vector<int>& nums, int k) {
        std::priority_queue<int> maxHeap(nums.begin(), nums.end());

        for (int i = 0; i < k - 1; ++i) {
            maxHeap.pop();
        }

        return maxHeap.top();
    }
};


#include <vector>
#include <queue>
#include <algorithm>

class Solution {
public:
    int findKthLargest(std::vector<int>& nums, int k) {
        std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;

        for (int num : nums) {
            if (minHeap.size() < k) {
                minHeap.push(num);
            } else if (num > minHeap.top()) {
                minHeap.pop();
                minHeap.push(num);
            }
        }

        return minHeap.top();
    }
};
