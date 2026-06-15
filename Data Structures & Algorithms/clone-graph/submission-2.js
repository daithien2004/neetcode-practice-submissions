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
    cloneGraph(node) {
        if (!node) return null

        const map = new Map()
        const queue = [node]

        const clone = new Node(node.val, [])
        map.set(node, clone)

        while (queue.length > 0) {
            const curr = queue.shift()

            for (const neighbor of curr.neighbors) {
                if (!map.has(neighbor)) {
                    const newClone = new Node(neighbor.val, [])
                    map.set(neighbor, newClone)
                    queue.push(neighbor)
                }

                map.get(curr).neighbors.push(map.get(neighbor))
            }
        }

        return map.get(node)
    }
}
