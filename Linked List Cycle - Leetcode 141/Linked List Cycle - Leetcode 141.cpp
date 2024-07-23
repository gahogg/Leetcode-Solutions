class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode dummy;
        dummy.next = head;
        ListNode *slow = &dummy, *fast = &dummy;

        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
};
