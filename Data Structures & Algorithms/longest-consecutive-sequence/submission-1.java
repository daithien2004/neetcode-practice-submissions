class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num: nums) {
            set.add(num);
        }

        int res = 0;

        for (int num: nums) {
            int streak = 0;
            while (set.contains(num)) {
                streak++;
                num++;
            }
            res = Math.max(res, streak);
        }

        return res;
    }
}
