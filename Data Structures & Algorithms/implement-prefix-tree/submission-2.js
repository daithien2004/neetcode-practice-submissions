class PrefixTree {
    constructor() {
        this.children = {}
        this.hasEnd = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this
        for (const ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new PrefixTree()
            }
            node = node.children[ch]
        }
        node.hasEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this
        for (const ch of word) {
            if (!node.children[ch]) return false
            node = node.children[ch]
        }
        return node.hasEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this
        for (const ch of prefix) {
            if (!node.children[ch]) return false
            node = node.children[ch]
        }
        return true;
    }
}
