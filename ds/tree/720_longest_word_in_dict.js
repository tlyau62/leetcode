/**
 * mind flow:
 * 1. build 1 char by 1 char => similar to prefix tree,
 *    so try with prefix tree
 * 2. if a word can be build, then this word can be search with dfs,
 *    where all the path nodes has "this.isWord = true"
 * 
 * @param {string[]} words
 * @return {string}
 */

var TrieNode = function () {
    this.map = new Map();
    this.isWord = false;
}

var longestWord = function (words) {

    const root = new TrieNode();
    root.isWord = true;

    for (const word of words) {
        insert(word);
    }

    let res = null;
    dfs(root, '');

    return res;

    function insert(word) {
        let node = root;

        for (const c of word) {
            if (node.map.has(c)) {
                node = node.map.get(c);
            } else {
                node.map.set(c, node = new TrieNode());
            }
        }

        node.isWord = true;
    }

    function dfs(node, str) {
        if (node.isWord === false) {
            return;
        }

        if (res === null ||
            str.length > res.length ||
            (str.length === res.length && str < res)) {
            res = str;
        }

        for (const [k, n] of node.map.entries()) {
            dfs(n, str + k);
        }
    }

};