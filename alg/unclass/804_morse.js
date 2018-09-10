/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const hashmap = new Map();
    const map = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const morse = words
        .map(word => word.split('').map(c => map[c.charCodeAt() - 'a'.charCodeAt()]).join(''));
    
    return new Set(morse).size;
};


let result;
result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);