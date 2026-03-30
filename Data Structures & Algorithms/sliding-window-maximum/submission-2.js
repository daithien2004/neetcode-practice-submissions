class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = [];
        for (let r=0; r<nums.length; r++) {
            while (nums[deque[deque.length-1]]<nums[r])
                deque.pop();
            deque.push(r);

            if (deque[0] === r-k) {
                deque.shift();
            }

            if (r>=k-1) {
                result.push(nums[deque[0]]);
            }
        }
        return result;
    }
}
