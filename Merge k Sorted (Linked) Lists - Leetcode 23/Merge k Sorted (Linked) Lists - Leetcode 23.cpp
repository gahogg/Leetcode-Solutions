#include <vector>
#include <queue>
#include <functional>
using namespace std;


class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto cmp = [](ListNode* a, ListNode* b) {
            return a->val > b->val;
        };
        priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> minHeap(cmp);

        // Add the initial nodes of each list to the heap
        for (ListNode* node : lists) {
            if (node) {
                minHeap.push(node);
            }
        }

        ListNode dummy(0);
        ListNode* cur = &dummy;

        while (!minHeap.empty()) {
            ListNode* node = minHeap.top();
            minHeap.pop();
            cur->next = node;
            cur = node;
            if (node->next) {
                minHeap.push(node->next);
            }
        }

        return dummy.next;
    }
};
