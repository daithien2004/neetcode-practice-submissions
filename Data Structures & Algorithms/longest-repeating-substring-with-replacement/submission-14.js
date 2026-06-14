class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Array(26).fill(0)

        let l=0, mC=0, mF=0
        for (let r=0; r<s.length; r++) {
            const idx = s.charCodeAt(r) - '65'
            freq[idx]++
            mF = Math.max(mF, freq[idx])
            if (r-l+1-mF > k) {
                freq[s.charCodeAt(l) - '65']--
                l++
            }

            mC = Math.max(r-l+1, mC)
        }

        return mC;
    }
}
