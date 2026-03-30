class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;
        
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0; // mark visited

            return 1
                + dfs(r+1, c)
                + dfs(r-1, c)
                + dfs(r, c+1)
                + dfs(r, c-1);
        }

        let maxArea = 0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }

        return maxArea;
    }
}
