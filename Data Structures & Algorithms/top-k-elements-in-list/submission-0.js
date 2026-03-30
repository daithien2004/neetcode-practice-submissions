class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i=0; i<nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0)+1);
        }

        let bucket = new Array(nums.length+1).fill(null).map(()=> []);

        for (let [num, fre] of map) {
            bucket[fre].push(num);
        }

        let re = [];

        for (let i=bucket.length-1; i>=0&&re.length <k; i--) {
            for (let num of bucket[i]) {
                re.push(num);
                if (re.length===k)
                    return re;
            }
        }
        return re;
    }
}
