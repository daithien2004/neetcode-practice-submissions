class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        for (let n of nums) this.add(n);
    }

    add(val) {
        if (this.heap.length < this.k) {
            this.push(val);
        } else if (val > this.heap[0]) {
            this.replaceMin(val);
        }
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        let cur = this.heap.length - 1;
        while (cur > 0) {
            let p = (cur - 1) >> 1;
            if (this.heap[p] <= this.heap[cur]) break;
            [this.heap[p], this.heap[cur]] = [this.heap[cur], this.heap[p]];
            cur = p;
        }
    }

    replaceMin(val) {
        this.heap[0] = val; 
        let cur = 0;
        while (true) {
            let L = cur * 2 + 1, R = cur * 2 + 2, min = cur;
            if (L < this.heap.length && this.heap[L] < this.heap[min]) min = L;
            if (R < this.heap.length && this.heap[R] < this.heap[min]) min = R;
            if (min === cur) break;
            [this.heap[cur], this.heap[min]] = [this.heap[min], this.heap[cur]];
            cur = min;
        }
    }
}