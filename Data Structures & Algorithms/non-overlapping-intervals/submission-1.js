class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;
        intervals.sort((a,b)=>a[1]-b[1])
        let prevEnd = -Infinity
        for (const [start, end] of intervals) {
            if (start >= prevEnd) prevEnd = end
            else count++;
        }
        return count;
    }
}
