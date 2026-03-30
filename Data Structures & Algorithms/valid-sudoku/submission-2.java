class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i=0; i<9; i++) {
            Set<Character> set = new HashSet<>();
            for (int j=0; j<9; j++) {
                if (board[i][j] == '.')
                    continue;
                if (set.contains(board[i][j])) {
                    return false;
                }
                set.add(board[i][j]);
            }
        }

        for (int j=0; j<9; j++) {
            Set<Character> set = new HashSet<>();
            for (int i=0; i<9; i++) {
                if (board[i][j] == '.')
                    continue;
                if (set.contains(board[i][j])) {
                    return false;
                }
                set.add(board[i][j]);
            }
        }

        for (int i=0; i<9; i++) {
            Set<Character> seen = new HashSet<>();
            for (int a=0; a<3; a++) {
                for (int b=0; b<3; b++) {
                    int row = (i/3)*3+a;
                    int col = (i%3)*3+b;
                    if (board[row][col] == '.') continue;
                    if (seen.contains(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        return true;
    }
}
