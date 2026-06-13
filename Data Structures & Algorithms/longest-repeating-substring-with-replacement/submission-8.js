class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Array(26).fill(0);
        let l = 0, maxCount = 0, max = 0;
        for (let r=0; r<s.length; r++) {
            const index = s.charCodeAt(r)-65
            freq[index]++;
            max = Math.max(max, freq[index])
            if (r-l+1-max>k) {
                freq[s.charCodeAt(l)-65]--;
                l++;
            }
            maxCount = Math.max(r-l+1, maxCount);
        }
        return maxCount;
    }
}
