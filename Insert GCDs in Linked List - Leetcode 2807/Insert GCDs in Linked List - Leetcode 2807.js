/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let current = head
    while(current.next){
        let next = current.next
        let hcf = gcd(current.val,next.val)
        let node = new ListNode(hcf,next)
        current.next = node;
        current = next
    }
    return head
};

let gcd = function(num1,num2){
    let smaller = Math.min(num1,num2)
    let hcf = 1
    for(let i = 1 ;i<=smaller;i++){
        if(num1%i == 0 && num2%i == 0) hcf = i
    }
    return hcf
}