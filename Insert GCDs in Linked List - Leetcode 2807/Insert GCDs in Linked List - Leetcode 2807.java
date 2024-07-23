import java.math.BigInteger;

public class Solution {
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode prev = head;
        ListNode cur = head.next;

        while (cur != null) {
            int gcd = gcd(cur.val, prev.val); // A
            ListNode g = new ListNode(gcd);
            prev.next = g;
            g.next = cur;
            prev = cur;
            cur = cur.next;
        }

        return head;
    }

    private int gcd(int a, int b) {
        return BigInteger.valueOf(a).gcd(BigInteger.valueOf(b)).intValue();
    }
}
