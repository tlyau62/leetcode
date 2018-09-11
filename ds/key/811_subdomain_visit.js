/**
 * https://leetcode.com/problems/subdomain-visit-count
 * 
 * time: O(n * k), n = num of cpdomains, k = max cpdomain length
 *
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    const freqMap = new Map();

    let freq, domain, subdom, spaceLoc, temp;

    for (const cpdomain of cpdomains) {
        spaceLoc = cpdomain.indexOf(' '); // O(k)
        freq = parseInt(cpdomain.slice(0, spaceLoc));
        domain = '.' + cpdomain.slice(spaceLoc + 1);
        subdom = '';

        // trace backward, O(k)
        for (let i = domain.length - 1; i >= 0; i--) {
            if (domain[i] === '.') {
                temp = freqMap.get(subdom);
                freqMap.set(subdom, temp === undefined ? freq : temp + freq);
            }
            subdom = domain[i] + subdom;
        }
    }

    // output result
    const res = [];
    for (const [k, v] of freqMap.entries()) {
        res.push(v + ' ' + k);
    }

    return res;

};