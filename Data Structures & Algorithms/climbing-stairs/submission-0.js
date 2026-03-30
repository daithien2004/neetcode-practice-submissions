class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n===1 || n===2)
            return n;

        let a = 1;
        let b = 2;

        for (let i = 3; i<=n; i++) {
            let k = b;
            b=a+b;
            a=k;
        }

        return b;
    }
}
