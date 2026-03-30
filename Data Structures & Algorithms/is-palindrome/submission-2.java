class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder builder = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (!Character.isLetterOrDigit(c)) continue;
            builder.append(Character.toLowerCase(c));
        }
        String k = builder.toString();

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
