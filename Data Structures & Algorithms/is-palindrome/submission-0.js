class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = "";
        s = s.toLowerCase();
        for (let c of s) {
            if ((c>='a'&&c<='z') || (c>='0' && c<='9')) {
                string+=c;
            }
        }
        let l=0;
        let r=string.length -1;
        while (l<r) {
            if (string[l]!==string[r])
                return false;
            l++;
            r--;
        }
        return true;
    }
}
