/**
 * problem: https://leetcode.com/problems/short-encoding-of-words/description/
 * 
 * mind flow:
 * 1. from example ["time", "me", "bell"] and S = "time#bell#",
 *    it looks like "time" and "me" can be reduce to "time" only,
 *    guess that they share the same postfix "me"
 * 2. after a number of try, no counter example is found to dispove
 *    "words with same postfix can be reduced to just the longest word"
 * 3. posttree can be used to reduce the problem size,
 *    such that solving for each branch once is enough to solve the whole problem
 * 4. dfs can be used
 * 5. see 820_short_encoding_words.png conclusion
 * 
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    const root = new TreeNode();
    let len = 0;

    // build tree
    for (const word of words) {
        insertTree(word, word.length - 1, root);
    }

    // calculate len
    for (const [k, child] of root.map.entries()) {
        len += counter(child).len;
    }

    return len;

    function TreeNode() {
        this.map = new Map();
    }

    function insertTree(word, i, node) {
        if (i < 0) {
            return;
        }

        const c = word[i];
        let cur_node = null;

        if (!node.map.has(c)) {
            cur_node = new TreeNode();
            node.map.set(c, cur_node);
        } else {
            cur_node = node.map.get(c);
        }

        insertTree(word, i - 1, cur_node);
    }

    function counter(node) {

        if (node.map.size === 0) {
            // leaf (len = 2 for current char and '#')
            return { branch: 1, len: 2 };
        }

        let branch, len, res;

        len = branch = 0;

        for (const [k, child] of node.map.entries()) {
            res = counter(child);
            branch += res.branch;
            len += res.len;
        }

        // number of branches of this node is k,
        // which means current char is repeatly used by k times,
        // so add k to the len
        len += branch;

        return { branch, len };

    }

};