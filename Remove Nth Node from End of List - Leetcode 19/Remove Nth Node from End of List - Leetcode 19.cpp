class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode dummy(0);
        dummy.next = head;
        ListNode *behind = &dummy, *ahead = &dummy;

        for (int i = 0; i <= n; ++i) {
            ahead = ahead->next;
        }

        while (ahead != nullptr) {
            behind = behind->next;
            ahead = ahead->next;
        }

        behind->next = behind->next->next;

        return dummy.next;
    }
};
