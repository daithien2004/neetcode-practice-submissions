class Solution {
    public boolean isPalindrome(String s) {
        String k = "";
        for (char c : s.toCharArray()) {
            if (!alphaNum(c)) continue;
            k += c;
        }

        int l = 0, r = k.length() - 1;

        while (l<r) {
            if (Character.toLowerCase(k.charAt(l)) != Character.toLowerCase(k.charAt(r))) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    public boolean alphaNum(char c) {
        return (c >= 'A' && c <= 'Z' ||
                c >= 'a' && c <= 'z' ||
                c >= '0' && c <= '9');
    }
}
