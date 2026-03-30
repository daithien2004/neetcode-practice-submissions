class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let a=0;
        let b=matrix.length-1
        let mid1 = Math.floor((b+a)/2)
        while (a<=b) {
            if (matrix[mid1][0] === target) return true;
            if (matrix[mid1][0] > target)
                b=mid1-1;
            else
                a=mid1+1;  
            mid1 = Math.floor((b+a)/2)
        }

        if (b<0) return false;

        let c=0;
        let d=matrix[0].length-1
        let mid2 = Math.floor((d+c)/2)
        while (c<=d) {
            if (matrix[b][mid2] === target)
                return true;
            if (matrix[b][mid2] > target)
                d=mid2-1;
            else
                c=mid2+1;  
            mid2 = Math.floor((d+c)/2)
        }
        return false;
    }
}
