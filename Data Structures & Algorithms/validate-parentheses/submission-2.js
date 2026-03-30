class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        let stack = [];
        for (let c of s) {
            if (c==='(' || c==='[' || c==='{') {
                stack.push(c);
            } else {
                let value = stack.pop();
                if ((c===')' && value !== '(') || (c===']' && value !== '[') || (c==='}' && value !== '{'))
                    return false
            }
        }
        if (stack.length === 0)
            return true;
        return false;
    }
}
