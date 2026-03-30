class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        int[] character = new int[26];
        for (int i=0; i<s.length(); i++) {
            character[s.charAt(i)-'a']++;
            character[t.charAt(i)-'a']--;
        }
        for (int c: character) {
            if (c < 0)
                return false;
        }
        return true;
    }
}
