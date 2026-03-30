class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let set = new Set(nums);
        for (let i=0; i<nums.length; i++) {
            if (!set.has(nums[i]-1)) {
                let count = 1;
                let k = nums[i]+1;
                while (set.has(k)) {
                    k++;
                    count++;
                }
                max = Math.max(count, max);
            } else {
                continue;
            }
        }
        return max;
    }
}
