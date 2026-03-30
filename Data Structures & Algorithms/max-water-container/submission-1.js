class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1;
        let am = 0;
        while (l<r) {
            let h = Math.min(heights[r], heights[l]);
            let width = r - l;
            am = Math.max(am,h*width);

            if (heights[r]<heights[l]) {
                r--;
            } else {
                l++;
            }
        }
        return am;
    }
}
