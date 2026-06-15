/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node, map = new Map()) {
        if (!node)
            return null

        if (map.has(node))
            return map.get(node)

        let clone = new Node(node.val, [])
        map.set(node, clone)

        for (const neighbor of node.neighbors) {
            clone.neighbors.push(this.cloneGraph(neighbor, map))
        }

        return clone
    }
}
