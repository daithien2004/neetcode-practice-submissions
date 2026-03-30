class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let c of tokens) {
            if (c!=='+' && c!=='-' && c!=='*' && c!=='/')
            {
                stack.push(Number(c));
                continue;
            }
            let a = stack.pop();
            let b = stack.pop();
            switch (c) {
                case '+':
                    stack.push(b+a)
                    break;
                case '-':
                    stack.push(b-a)
                    break;
                case '*':
                    stack.push(b*a)
                    break;
                case '/':
                    stack.push(Math.trunc(b/a))
                    break;
            }
        }
        return stack.pop();
    }
}
