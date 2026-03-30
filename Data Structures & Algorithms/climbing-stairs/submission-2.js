class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2)
            return n;

        let a = 1;
        let b = 2;

        for (let i = 3; i<=n; i++) {
            [a , b] = [b, b + a]
        }

        return b;
    }
}
