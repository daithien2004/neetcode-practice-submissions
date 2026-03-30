/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry > 0) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            let sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);
            let digit = sum % 10;

            curr.next = new ListNode(digit);
            curr = curr.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
