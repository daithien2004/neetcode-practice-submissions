class Solution {
    public int longestConsecutive(int[] nums) {
       Set<Integer> set = new HashSet<>();

        for (int num: nums) {
            set.add(num);
        }

       int result = 0;
       for (int i=0; i<nums.length; i++) {
            int l = 0;
            while (set.contains(nums[i])) {
                l++;
                nums[i]++;
            }
            result = Math.max(result, l);
       }
       return result;
    }
}
