class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    isPermutate(m1, m2) {
        if (m1.size !== m2.size) return false;
        for (let key of m1.keys()) {
            if (m1.get(key)!==m2.get(key)) {
                return false
            }
        }
        return true;
    }

    checkInclusion(s1, s2) {
        let s1Fre = new Map();
        let s2Fre = new Map();
        for (let i=0; i<s1.length; i++) {
            s1Fre.set(s1[i], (s1Fre.get(s1[i]) || 0) + 1)
        }

        let l = 0;

        for (let r=0; r<s2.length; r++) {
            s2Fre.set(s2[r], (s2Fre.get(s2[r]) || 0) + 1)
            if (r-l+1>s1.length) {
                if (s2Fre.get(s2[l])===1)
                    s2Fre.delete(s2[l])
                else
                    s2Fre.set(s2[l], s2Fre.get(s2[l])-1)
                l++;
            }
            if (this.isPermutate(s1Fre, s2Fre)) return true;
        }
        return false;
    }
}
