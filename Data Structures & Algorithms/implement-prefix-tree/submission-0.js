class PrefixTree {
    constructor() {
        this.children = {}
        this.hasWord = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this
        for (let e of word) {
            if (!node.children[e])
                node.children[e] = new PrefixTree();
            node = node.children[e]
        }
        node.hasWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this
        for (let e of word) {
            if (!node.children[e])
                return false
            node = node.children[e]
        }
        return node.hasWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this
        for (let e of prefix) {
            if (!node.children[e])
                return false
            node = node.children[e]
        }
        return true;
    }
}
