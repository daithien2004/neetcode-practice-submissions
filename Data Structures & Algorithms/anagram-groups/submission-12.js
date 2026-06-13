class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const re = {}
        for (const s of strs) {
            const count = new Array(26).fill(0)
            for (const ch of s) {
                count[ch.charCodeAt(0)-97]++
            }
            const key = count.join('#')
            if (!re[key])
                re[key] = []
            re[key].push(s)
        }
        return Object.values(re)
    }
}
