// prob: https://leetcode.com/problems/map-sum-pairs/description/
// can be solved by prefix tree

/**
 * Initialize your data structure here.
 */

var TrieNode = function () {
    this.dict = new Map();
    this.val = 0;
}

var MapSum = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {

    let node = this.root;

    // move to target node
    for (let i = 0; i < key.length; i++) {
        if (node.dict.has(key[i])) {
            // node exists
            node = node.dict.get(key[i]);
            continue;
        } else {
            // create new node
            node.dict.set(key[i], node = new TrieNode());
        }
    }

    // update node val
    node.val = val;

};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {

    let node = this.root;

    // move to target
    for (let i = 0; i < prefix.length; i++) {
        if (node.dict.has(prefix[i])) {
            node = node.dict.get(prefix[i]);
        } else {
            // no such prefix
            return 0;
        }
    }

    // sum all the val of this target node and its children
    return dfs(node);

    function dfs(node) {

        let counter = node.val;

        for (const [k, n] of node.dict.entries()) {
            counter += dfs(n);
        }

        return counter;
    }

};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */