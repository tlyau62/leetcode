/**
 * cases
 * - abcda
 * - aaaabaaaa
 * 
 * keys
 * - make sure to handle when to insert a dummy mid char
 * - make sure to handle how to group a series of same char e.g. aaaaa
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    if (s.length <= 1) {
        return s;
    } else if (s.length === 2 && s[0] === s[1]) {
        return s[0] + s[1];
    }

    let max_p, res, temp_s, diff, mid, j, jump;
    max_p = '';
    for (let i = 0; i < s.length;) {

        // determine mid
        for (j = i + 1; j < s.length && s[i] === s[j]; j++) { }

        diff = j - i;

        if (diff % 2 === 1) {
            res = recur_solve(s, i + (diff - 1) / 2, 0);
        } else {
            mid = i + (diff / 2 - 1);
            temp_s = s.substring(0, mid + 1) + '*' + s.substring(mid + 1, s.length); // add mid, * is dummy char
            res = recur_solve(temp_s, mid + 1, 0);
            mid = res.length / 2;
            res = res.substring(0, mid) + res.substring(mid + 1, res.length); // remove mid
        }

        if (res.length > max_p.length) {
            max_p = res;
        }

        i = j;
    }

    return max_p;
};

function recur_solve(s, idx, offset) {
    let l, r, max_p, result;

    if (idx - offset < 0 || idx + offset >= s.length) { // no larger palindrome can found
        return null;
    }

    l = idx - offset; // min index
    r = idx + offset; // max index

    if (s[l] === s[r]) { // palindrome type: has middle
        max_p = recur_solve(s, idx, offset + 1); // try to make it larger

        if (!max_p) { // if this is the max palindrome
            return s.substring(l, r + 1); // return this palindrome
        } else {
            return max_p; // return this max palindrome
        }
    }

    // l !== idx && s[l] === s[idx]) { // mirror case(no need to care)

    return null;

}

function verify(str, output) {
    let result = longestPalindrome(str);
    if (Array.isArray(output)) {
        let found = false;
        for (const out of output) {
            if (result === out) {
                found = true;
                break;
            }
        }
        console.log(result + ' ' + found);
    } else {
        console.log(result + ' ' + (result === output));
    }
}


verify('daaaaaa', 'aaaaaa');
verify('daaaaa', 'aaaaa');
verify('ada', 'ada');
verify('adaa', 'ada');
verify('aaadaa', 'aadaa');
verify('aaaabbbaaaaaccaca', 'aaaabbbaaaa');
verify('cdd', 'dd');
verify('ccd', 'cc');
verify("aaabaaaa", "aaabaaa");
verify('a', 'a');
verify('aba', 'aba');
verify('baba', 'bab');
verify('babad', ['bab', 'aba']);
verify('babad', 'bab');
verify('cbbebbc', 'cbbebbc');
verify('abbd', 'bb');
verify('cbbd', 'bb');
verify('', '');
verify('ssaa', ['aa', 'ss']);
verify('iooi', ['iooi']);
verify('ssaascascoiajscasciooicsaoijasc', 'asciooicsa');
verify('abcde', 'a');
verify('bb', 'bb');