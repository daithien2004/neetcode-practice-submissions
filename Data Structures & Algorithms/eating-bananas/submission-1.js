class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1;
        let right=Math.max(...piles)

        let result = right;

        while (left<=right) {
            let mid = Math.floor((left+right)/2)
            let time = this.totalTimeToEat(piles, mid);
            if (time <= h) {
                result = mid;
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
        return result;
    }

    totalTimeToEat(piles, k) {
        let sum = 0;
        for (let p of piles) {
            sum += Math.ceil(p/k)
        }
        return sum;
    }   
}
