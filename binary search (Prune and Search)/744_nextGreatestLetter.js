/**
 * one-line O(n), can be improve with O(lg n) with bsearch
 * beat 59%
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    return letters.find(l => l > target) || letters[0];
};