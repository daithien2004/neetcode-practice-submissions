class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0)+1)
        }

        const bucket = new Array(nums.length+1).fill(null).map(()=>[])
        for (const [key, value] of freq) {
            bucket[value].push(key)
        }

        const result = []

        for (let i = bucket.length-1; i>=0; i--) {
            for (const num of bucket[i]) {
                result.push(num)
                if (result.length === k)
                    return result
            }
        }
    }
}
