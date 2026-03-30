class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min=Infinity;
        let max=0;
        for (let i=0; i<prices.length; i++) {
            if (prices[i]<min) {
                min = prices[i];
                continue;
            }
            max=Math.max(max, prices[i]-min);
        }

        return max;
    }
}
