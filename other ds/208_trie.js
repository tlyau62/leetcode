/**
 * implemtated by lined list + hash table
 * insert, search, startsWith: O(n)
 * 
 * beats 68%
 */


/**
 * TrieNode's contructor
 */
var TrieNode = function () {
    this.isFilled = false; // used by search operation only [path to this node is a input word]
    this.dict = new Map();
}

/**
 * Trie's contructor
 */
var Trie = function () {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node, char, charIdx, nextNode;

    node = this.root;
    charIdx = 0;

    while (charIdx < word.length) {
        char = word[charIdx];
        nextNode = node.dict.get(char);
        if (nextNode === undefined) {
            nextNode = new TrieNode();
            node.dict.set(char, nextNode);
        }
        node = nextNode;
        charIdx++;
    }

    node.isFilled = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node, charIdx, newNode;

    node = this.root;
    charIdx = 0;

    while (charIdx < word.length) {
        node = node.dict.get(word[charIdx]);
        if (node === undefined) {
            return false;
        }
        charIdx++;
    }

    return node.isFilled;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node, charIdx, newNode;

    node = this.root;
    charIdx = 0;

    while (charIdx < prefix.length) {
        node = node.dict.get(prefix[charIdx]);
        if (node === undefined) {
            return false;
        }
        charIdx++;
    }

    return true;
};


/**
 * given test case
 * ["Trie","insert","search","search","startsWith","insert","search"]
 * [[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
 *
 * repeat char
 * ["Trie","insert", "search", "search", "startsWith", "startsWith"]
 * [[],["aaaa"],["aa"], ["aaaa"], ["aa"], ["aaaa"]]
 * 
 * Palindrome
 * ["Trie","insert", "search", "search", "search", "startsWith","startsWith","startsWith","startsWith"]
 * [[],["aabbaa"],["aa"], ["bb"], ["aabbaa"], ["aa"], ["aabb"], ["bbaa"], ["aabbaa"]]
 * 
 * 
 */