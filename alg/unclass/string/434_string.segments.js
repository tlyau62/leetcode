/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.trim().split(/ +/).filter(s => s.length > 0).length;
};

// test case
// "Hello, my name is John"
// "Hello, my name    is   John"
// " Hello, my name    is   John "
// ""
// "   "