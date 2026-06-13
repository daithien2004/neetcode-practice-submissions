class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let re = 0;
        while (l<r) {
            re = Math.max(Math.min(heights[l], heights[r])*(r-l), re)
            if (heights[l] > heights[r])
                r--;
            else
                l++;
        }

        return re;
    }
}
