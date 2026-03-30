class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); 
        
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    _addNodeToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        let node = this.cache.get(key);
        this._removeNode(node);
        this._addNodeToHead(node);
        
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            node.value = value;
            this._removeNode(node);
            this._addNodeToHead(node);
        } else {
            let newNode = new Node(key, value);
            this.cache.set(key, newNode);
            this._addNodeToHead(newNode);

            if (this.cache.size > this.capacity) {
                let lruNode = this.tail.prev;
                this._removeNode(lruNode);
                this.cache.delete(lruNode.key);
            }
        }
    }
}