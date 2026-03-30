class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = Array(nums.length).fill(1);
        let mul=1;
        for (let i=1; i<nums.length; i++) {
            mul=mul*nums[i-1];
            arr[i]*=mul
        }
        mul=1;
        for (let i=nums.length-2; i>=0; i--) {
            mul=mul*nums[i+1];
            arr[i]*=mul
        }
        return arr;
    }
}
