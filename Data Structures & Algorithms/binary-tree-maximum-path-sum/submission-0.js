/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity

        function gain(node) {
            if (!node) return 0
            const l = Math.max(0, gain(node.left))
            const r = Math.max(0, gain(node.right))
            max = Math.max(max, node.val + l + r)
            return node.val + Math.max(l, r)
        }

        gain(root)
        return max
    }
}
