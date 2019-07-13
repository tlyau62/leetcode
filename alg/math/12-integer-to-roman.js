/**
 * problem: https://leetcode.com/problems/integer-to-roman/
 * 
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const mapVal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const mapRom = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let pos, result;
    
    pos = mapVal.length - 1;
    result = '';
    
    while (num > 0) {
        while (num < mapVal[pos]) {
            pos--;
        }
        
        result += mapRom[pos].repeat(~~(num / mapVal[pos]));
        num %= mapVal[pos];
    }
    
    return result;
};