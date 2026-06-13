class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const used = new Array(nums.length).fill(false);
        const result = []
        const cur = []

        function backtrack() {
            if (cur.length === nums.length) {
                result.push([...cur])
                return;
            }


            for (let i=0; i<nums.length; i++) {
                if (!used[i]) {
                    cur.push(nums[i])
                    used[i] = true;
                    backtrack(cur)
                    cur.pop();
                    used[i] = false;
                }
            }
        }

        backtrack()
        return result;
    }
}
