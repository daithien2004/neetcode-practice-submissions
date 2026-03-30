class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = []

        for (let num of nums) {
            this.add(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.heap.length < this.k )
            this.push(val);
        else if (val > this.heap[0]) {
            this.replaceMin(val)
        }
        return this.heap[0]
    }

    push(val) {
        this.heap.push(val)
        let index = this.heap.length - 1;
        while (index > 0) {
            let root = Math.floor((index - 1)/2);
            if (this.heap[index] >= this.heap[root])
                break;
            [this.heap[root], this.heap[index]] = [this.heap[index], this.heap[root]]
            index = root;
        }
    }

    replaceMin(val) {
        this.heap[0] = val;
        let index = 0;
        while (true) {
            let small = index;
            let left = 2*index + 1;
            let right = 2*index + 2;

            if (left < this.heap.length && this.heap[left] < this.heap[small]) {
                small= left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[small]) {
                small= right;
            }

            if (small === index) break;

            [this.heap[index], this.heap[small]] = [this.heap[small], this.heap[index]];
            index = small;
        }
    }
}
