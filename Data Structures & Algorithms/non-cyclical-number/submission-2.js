class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set();
        while (n !== 1 && !set.has(n)) {
            set.add(n);
            let sum = 0;

            while (n>0) {
                sum += Math.pow(n%10,2)
                n=Math.floor(n/10)
            }

            n = sum;
        }
        return n === 1;
    }
}
