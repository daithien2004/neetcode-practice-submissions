class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch]
        }
        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return node.isEnd
            const ch = word[i]
            if (ch !== '.') {
                const next = node.children[ch]
                return next ? dfs(next, i+1) : false
            }
            for (const next of Object.values(node.children)) {
                if (dfs(next, i+1)) return true;
            }
            return false
        }

        return dfs(this.root, 0)
    }
}
