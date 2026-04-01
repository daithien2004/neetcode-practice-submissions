class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num: nums) {
            set.add(num);
        }

        int result = 0;

        for (int num: nums) {
            int streak = 0;
            while (set.contains(num)) {
                streak++;
                num++;
            }
            result = Math.max(result, streak);
        }

        return result;
    }
}
