/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    
    // cond: input checker
    if (num <= 0) {
        return false;
    }
    
    const div = [2,3,5];
    let i;
    
    // loop: det num has/hasn't only factors 2,3,5
    // end cond for "only include 2,3,5" => num === 1 && i < div.length
    // end cond for "not only include 2,3,5" => num > 1 && i >= div.length
    for (i = 0; i < div.length && num > 1;) {
        
        // cond: delegator
        if (num % div[i] === 0) {
            num /= div[i]; // t: div num machine
        } else {
            i++; // f: i counter updator
        }
        
    }
    
    return i < div.length;
};