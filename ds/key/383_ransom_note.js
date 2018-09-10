// order of log
// can be optimized with hash table with linear time
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let i, j;
    i = j = 0;

    ransomNote = ransomNote.split('').sort();
    magazine = magazine.split('').sort();
    while (i < ransomNote.length && j < magazine.length) {
        i += ransomNote[i] === magazine[j++];
    }

    return i === ransomNote.length;

};