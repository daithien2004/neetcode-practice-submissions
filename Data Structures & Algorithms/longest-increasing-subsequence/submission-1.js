class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tail = []

        for (const num of nums) {
            let l=0, r= tail.length
            while (l<r) {
                const mid = Math.floor((r+l)/2)
                if (tail[mid] < num) {
                    l = mid + 1
                } else {
                    r = mid
                }
            }
            tail[l] = num
        }

        return tail.length
    }
}
