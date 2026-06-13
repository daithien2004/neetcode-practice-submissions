class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const r = matrix.length;
        const c = matrix[0].length;

        let fR = false;
        let fC = false;

        for (let i=0; i<r; i++) if (matrix[i][0]===0) fC=true;
        for (let j=0; j<c; j++) if (matrix[0][j]===0) fR=true;

        for (let i=1; i<r; i++) {
            for (let j=1; j<c; j++) {
                if (matrix[i][j]===0) {
                    matrix[i][0] = 0
                    matrix[0][j] = 0
                }
            }
        }

        for (let i=1; i<r; i++) {
            for (let j=1; j<c; j++) {
                if (matrix[i][0] === 0 ||
                    matrix[0][j] === 0)
                    matrix[i][j] = 0
            }
        }

        if (fC) for (let i=0; i<r; i++) matrix[i][0] = 0;
        if (fR) for (let j=0; j<c; j++) matrix[0][j] = 0;
    }
}
