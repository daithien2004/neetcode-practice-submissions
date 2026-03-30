class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pMap = [];
        let tList = []
        for (let i=0; i<position.length; i++) {
            tList[i] = (target-position[i])/speed[i]
            pMap.push([position[i], tList[i]])
        }
        pMap.sort((a,b)=> b[0]-a[0])
        let stack = [pMap[0][1]];
        let count = 1;
        for (let i=1; i<pMap.length; i++) {
            if (pMap[i][1] > stack[0]) {
                stack.pop()
                stack.push(pMap[i][1])
                count++;
            }
        }
        return count;
    }
}
