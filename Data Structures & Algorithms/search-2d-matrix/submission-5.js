class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let COLS=matrix[0].length;
        // let ROWS=matrix.length;
        
        // let top = 0;
        // let bottom = ROWS-1;

        // while (top<=bottom) {
        //     let mid = Math.floor((top+bottom)/2)
        //     if (matrix[mid][0] === target) return true;
        //     if (matrix[mid][0] > target)
        //         bottom=mid-1;
        //     else
        //         top=mid+1;  
        // }

        // if (bottom<0) return false;

        // let left=0;
        // let right=COLS-1
        // while (left<=right) {
        //     let mid = Math.floor((left+right)/2)
        //     if (matrix[bottom][mid] === target)
        //         return true;
        //     if (matrix[bottom][mid] > target)
        //         right=mid-1;
        //     else
        //         left=mid+1;  
        // }
        // return false;

        let ROWS=matrix.length;
        let COLS=matrix[0].length;
        
        let left = 0;
        let right = (ROWS*COLS)-1;

        while (left<=right) {
            let mid = Math.floor((right+left)/2)

            let r = Math.floor(mid/COLS)
            let c = mid%COLS;

            let val = matrix[r][c]
            if (val === target) return true;
            if (val<target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false
    }
}
