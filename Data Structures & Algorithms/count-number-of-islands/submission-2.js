class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let ROWS = grid.length;
        let COLUMNS = grid[0].length;

        const traverse = (r, c) => {
            if (r<0 || c<0 || r>=ROWS || c>=COLUMNS || grid[r][c]!=="1")
                return

            grid[r][c] = "0"

            const directions = [[-1,0], [1,0], [0,-1], [0,1]]

            for (let [dr, dc] of directions) {
                traverse(r+dr, c+dc)
            }
        };

        let count = 0;

        for (let i=0; i<ROWS; i++) {
            for (let j=0; j<COLUMNS; j++) {
                if (grid[i][j] === "1") {
                    traverse(i,j)
                    count++;
                }
            }
        }

        return count;
    }
}
