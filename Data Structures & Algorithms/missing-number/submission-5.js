class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let expected = n*(n+1)/2
        let actual = 0;

        for (let n of nums) {
            actual += n;
        }
        return expected - actual;
    }
}
