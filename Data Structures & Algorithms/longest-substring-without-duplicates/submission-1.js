class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let max = 0;
        let l=0 ,r=0;
        while (r<s.length) {
            if (!set.has(s[r])) {
                set.add(s[r]);
                max=Math.max(r-l+1, max);
                r++;
            }
            else {
                set.delete(s[l]);
                l++;
            }
        }
        return max;
    }
}
