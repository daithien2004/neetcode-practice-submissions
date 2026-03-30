class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // let map = new Map()
        // for (let i=0; i<nums.length; i++) {
        //     map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        // }
        // for (let [key, value] of map) {
        //     if (value === 1)
        //         return key;
        // }
        let result = 0;
        for (let num of nums) {
            result ^= num
        }
        return result
    }
}
