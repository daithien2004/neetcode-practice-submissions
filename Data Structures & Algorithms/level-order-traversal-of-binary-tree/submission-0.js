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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null)
            return [];

        let queue = [root]
        let result = []

        while (queue.length > 0) {
            let len = queue.length;
            let re = []

            for (let i=0; i<len; i++) {
                let node = queue.shift();
                re.push(node.val)
                if (node.left !== null)
                    queue.push(node.left)
                
                if (node.right !== null)
                    queue.push(node.right)
            }

            result.push(re)
        }

        return result
    }
}
