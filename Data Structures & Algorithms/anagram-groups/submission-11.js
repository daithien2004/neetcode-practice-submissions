class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const re = {}
        for (let i=0; i< strs.length; i++) {
            let key = strs[i].split('').sort().join('');
            if (!re[key])
                re[key] = []
            re[key].push(strs[i])
        }
        return Object.values(re)
    }
}
