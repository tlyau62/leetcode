/**
 * greedy
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left, right, avai;
    left = 0;
    right = s.length - 1;
    avai = 1;
    while (left < right && avai >= 0) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else if (right - left >= 5) { // 1 char from both sides can be skip, trick is to check one more char .e.g for case "abcacbab"
            if (left + 1 < right && s[left + 1] === s[right]
                && left + 2 < right - 1 && s[left + 2] === s[right - 1]) { // skip current s[left] to fit s[right]
                left++;
                avai--;
            } else if (right - 1 > left && s[left] === s[right - 1]
                && right - 2 > left + 1 && s[left + 1] === s[right - 2]) { // skip current s[right] to fit s[left]
                right--;
                avai--;
            } else {
                return false;
            }
        } else if (right - left > 1) {
            if (left + 1 < right && s[left + 1] === s[right]) { // skip current s[left] to fit s[right]
                left++;
                avai--;
            } else if (right - 1 > left && s[left] === s[right - 1]) { // skip current s[right] to fit s[left]
                right--;
                avai--;
            } else {
                return false;
            }
        } else { // skip unneccessary one of two middle, e.g. case: "abcd"
            left++;
            right--;
            avai--;
        }
    }

    return avai >= 0;
};

let result;
result = validPalindrome("cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu");
console.log(result);


// test case
// "abcacbab"
// "abccba"
// "abcba"
// "aba"
// "abcecdba"
// "abdcecba"
// "abdfecba"
// "abceceba"
// "aaaaac"
// "abca"
// "abcdba"
// "abcd"
// "caa"
// "e"
// "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu"