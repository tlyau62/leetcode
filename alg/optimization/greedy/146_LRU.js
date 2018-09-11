/**
 * used hash table to hash link list
 * entry in hash table: (key, (node, parent node))
 * node in link list: (key, value)
 * 
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.left = this.right = {};
    this.length = 0;
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const map = this.map;

    // not found
    if (!map.has(key)) {
        return -1;
    }

    // get and update list and map
    const entry = map.get(key);
    if (entry.node !== this.right) {
        entry.pnode.next = entry.node.next;
        map.get(entry.node.next.key).pnode = entry.pnode;

        this.right.next = entry.node;
        entry.pnode = this.right;
        this.right = entry.node;
        entry.node.next = null;
    }

    return entry.node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const { map, capacity } = this;
    let node, pnode;

    // insert or update
    if (map.has(key)) {
        // get and update list and map
        const entry = map.get(key);
        entry.node.value = value;
        if (entry.node !== this.right) {
            // make sure that 2 parents are updated
            entry.pnode.next = entry.node.next;
            map.get(entry.node.next.key).pnode = entry.pnode;

            this.right.next = entry.node;
            entry.pnode = this.right;
            this.right = entry.node;
            entry.node.next = null;
        }
    } else {
        // do insert
        node = { key, value, next: null };
        map.set(key, { node, pnode: this.right });
        this.right = this.right.next = node;

        if (this.length === 0) {
            this.left.next = node;
            this.length++;
        } else if (this.length < capacity) {
            this.length++;
        } else {
            // replace alg
            map.get(this.left.next.next.key).pnode = this.left;
            map.delete(this.left.next.key);
            this.left.next = this.left.next.next;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
// console.log(cache);

// const cache = new LRUCache(5 /* capacity */);
// cache.put(1, 1);
// cache.put(30, 30);
// cache.put(20, 20);
// cache.put(2, 2);
// cache.put(1, 1);
// cache.put(4, 4);
// cache.put(5, 5);
// cache.get(3);
// cache.get(20);
// cache.get(1);
// cache.put(30, 30);
// cache.put(20, 20);
// cache.get(2, 2);
// cache.get(1, 1);
// cache.get(4, 4);
// cache.get(5, 5);
// cache.put(20);
// cache.get(21, 21);
// cache.get(20);
// cache.get(30);


const cache = new LRUCache(2 /* capacity */);
cache.put(2, 1);
cache.put(2, 2);
cache.get(2);
cache.put(1, 1);
cache.put(4, 1);
cache.get(2);