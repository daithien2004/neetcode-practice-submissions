class Solution {
    public int characterReplacement(String s, int k) {
        int[] freq = new int[26];
        int l=0, maxFreq=0, result=0;

        for (int r=0; r<s.length(); r++) {
            int idx = s.charAt(r) - 'A';
            freq[idx]++;
            maxFreq = Math.max(freq[idx], maxFreq);

            if (r-l+1-maxFreq>k) {
                int leftIdx = s.charAt(l) - 'A';
                freq[leftIdx]--;
                l++;
            }

            result = Math.max(result, r-l+1);
        }

        return result;
    }
}
