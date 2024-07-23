#include <algorithm> // for std::gcd

class Solution {
public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        ListNode* prev = head;
        ListNode* cur = head->next;

        while (cur != nullptr) {
            int gcd = std::gcd(cur->val, prev->val); // A
            ListNode* g = new ListNode(gcd);
            prev->next = g;
            g->next = cur;
            prev = cur;
            cur = cur->next;
        }

        return head;
    }
};
