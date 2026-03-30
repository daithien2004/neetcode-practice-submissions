class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set();
        for (let i=0; i<9 ;i++) {
            for (let j=0; j<9;j++) {
                let char = board[i][j];

                if (char==='.')
                    continue;

                let row = "row" + i + char;
                let col = "col"+ j + char;
                
                let box = "box"+ Math.floor(i/3)*3 + Math.floor(j/3) + char

                if (set.has(row)||set.has(col)||set.has(box))
                    return false;

                set.add(row);
                set.add(col);
                set.add(box);
            }
        }    
        return true;  
    }
}
