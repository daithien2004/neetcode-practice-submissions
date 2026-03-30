// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        let mapNode = new Map()

        let curr = head
        while (curr!==null) {
            mapNode.set(curr, new Node(curr.val, null, null))
            curr = curr.next
        }

        curr = head
        while (curr !== null) {
            let newNode = mapNode.get(curr)

            newNode.next = mapNode.get(curr.next) || null
            newNode.random = mapNode.get(curr.random) || null

            curr = curr.next
        }

        return mapNode.get(head);
    }
}
