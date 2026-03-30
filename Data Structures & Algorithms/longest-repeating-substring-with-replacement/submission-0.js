class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let maxLen = 0;
        let maxFre = 0;
        let l=0;
        for (let r=0; r<s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxFre = Math.max(count[s[r]], maxFre);

            while ((r-l+1)-maxFre>k) {
                count[s[l]]--;
                l++;
            }
            maxLen = Math.max(maxLen, r-l+1);
        }
        return maxLen;
    }
}
