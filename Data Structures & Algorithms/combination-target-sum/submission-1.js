class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []

        function backtrack(remaining, start, path) {
            if (remaining === 0)
                result.push([...path])

            if (remaining < 0)
                return;

            for (let i=start; i<nums.length; i++) {
                path.push(nums[i])
                backtrack(remaining - nums[i], i, path)
                path.pop()
            }
        }

        backtrack(target, 0, [])

        return result;
    }
}
