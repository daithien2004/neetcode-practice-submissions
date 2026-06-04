class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Array(26).fill(0);
        let l = 0, maxFreq = 0, result = 0;

        for (let r=0; r<s.length; r++) {
            freq[s.charCodeAt(r)-65]++;
            maxFreq=Math.max(maxFreq, freq[s.charCodeAt(r)-65]);

            if (r-l+1-maxFreq>k) {
                freq[s.charCodeAt(l)-65]--;
                l++;
            }

            result = Math.max(result, r-l+1);
        }
        
        return result;
    }
}
