class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        let stack = []
        for (let i=temperatures.length-1; i>=0; i--) {
            if (stack.length === 0) {
                stack.push(i)
                result.push(0);
                continue;
            }
            while (stack.length > 0 && temperatures[stack[stack.length-1]] <= temperatures[i]) {
                stack.pop()
            }
            if (stack.length === 0) {
                result.push(0);
                stack.push(i);
            } else {
                let index = stack[stack.length - 1]
                result.push(index-i);
                stack.push(i);
            }
        }
        return result.reverse();
    }
}
