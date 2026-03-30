class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []

        const traverse = (start, subset) => {
            result.push([...subset])

            for (let i=start; i<nums.length; i++) {
                subset.push(nums[i])
                traverse(i+1, subset);
                subset.pop()
            }
        }

        traverse(0, [])

        return result
    }
}
