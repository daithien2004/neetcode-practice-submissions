class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const used = new Array(26).fill(false)
        const result = []
        const cur = []

        function backtrack() {
            if (cur.length === nums.length) {
                result.push([...cur])
                return;
            }

            for (let i=0; i<nums.length; i++) {
                if (!used[i]) {
                    used[i] = true;
                    cur.push(nums[i])
                    backtrack()
                    cur.pop(nums[i])
                    used[i] = false
                }
            }
        }

        backtrack()
        return result
    }
}
