class MaxHeap {
    constructor() {
        this.heap = []
    }

    push(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if (this.heap[parent] < this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
                index = parent;
            }
            else
                break;
        }
    }

    pop() {
        if (this.size() === 0) return 0;
        if (this.size() === 1) return this.heap.pop();

        let val = this.heap[0];
        this.heap[0] = this.heap.pop();

        let index  = 0;
        while (true) {
            let left = 2*index + 1;
            let right = 2*index + 2;
            let large = index;

            if (left < this.heap.length && this.heap[left]>this.heap[large])
                large = left;
            if (right< this.heap.length && this.heap[right]>this.heap[large])
                large = right;

            if (large !== index) {
                [this.heap[index], this.heap[large]] = [this.heap[large], this.heap[index]];
                index = large;
            } else {
                break;
            }
        }

        return val;
    }

    size() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */


    lastStoneWeight(stones) {
        let heap = new MaxHeap(stones);

        for (let s of stones) {
            heap.push(s)
        }

        while (heap.size() > 1) {
            let a = heap.pop();
            let b = heap.pop();

            if (a!==b)
                heap.push(a-b)
        }

        return heap.size() === 0 ? 0 : heap.pop();
    }
}
