class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a,b)=> a-b)
        if (nums[0]!==0)
            return 0;
        for (let i=1; i<nums.length; i++) {
            if (nums[i]===nums[i-1]+2)
                return nums[i-1]+1;
        }
        return nums[nums.length-1]+1;
    }
}
