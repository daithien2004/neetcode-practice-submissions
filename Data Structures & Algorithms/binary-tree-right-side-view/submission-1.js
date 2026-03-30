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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root == null)
            return []
        let result = [root.val]

        let queue = [root]

        while (queue.length > 0) {
            let len = queue.length

            let isRight = false

            for (let i=0; i<len; i++) {
                let node = queue.shift();
                if (node === null)
                    continue;

                if (node.right !== null && isRight === false) {
                    result.push(node.right.val)
                    isRight = true;
                }
                
                if (node.right === null && node.left !== null && isRight === false) {
                    result.push(node.left.val)
                    isRight = true;
                }

                queue.push(node.right)
                queue.push(node.left)
            }
        }

        return result;
    }
}
