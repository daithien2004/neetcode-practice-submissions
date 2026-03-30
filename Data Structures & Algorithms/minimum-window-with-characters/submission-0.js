class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        if (t.length > s.length) return "";

        let sMap = new Map();
        let tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        let l = 0;
        let matchCount = 0;
        let minLen = Infinity;
        let res = "";

        for (let r=0; r<s.length; r++) {
            let charR = s[r];
            sMap.set(charR, (sMap.get(charR) || 0) + 1);

            if (tMap.has(charR) && sMap.get(charR)<=tMap.get(charR))
                matchCount++;

            while (matchCount === t.length) {
                if (r-l+1<minLen) {
                    minLen = r-l+1
                    res = s.substring(l, r+1);
                }
                let charL = s[l];
                sMap.set(charL, sMap.get(charL) - 1);

                if (tMap.has(charL) && sMap.get(charL) < tMap.get(charL)) {
                    matchCount--;
                }

                l++;
            }    
        }
        return res;
    }
}
