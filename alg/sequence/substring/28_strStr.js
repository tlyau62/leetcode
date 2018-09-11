/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// brute force: O(n * m) => polynomial time
var strStr = function (haystack, needle) {

    if (needle.length === 0) {
        return 0;
    }

    let i, j;
    for (i = 0; i < haystack.length; i++) {

        // no more char in haystack can fulfill needle
        if (i + needle.length > haystack.length) {
            return -1;
        }

        // start matching if 1st char in needle is matched
        if (haystack[i] === needle[0]) {
            for (j = 1; j < needle.length && haystack[i + j] === needle[j]; j++) {
            }
            if (j === needle.length) {
                return i;
            }
        }
    }

    return -1;
};

function verify(test) {
    let haystack, needle;
    for (let i = 0; i < test.length; i++) {
        haystack = test[i][0];
        needle = test[i][1];
        console.log(`${haystack} ${needle} ${strStr(haystack, needle)} ${haystack.indexOf(needle)}`);
    }
}

const test = [];
test.push(["hello", "helloo"]);
test.push(["hello", "ll"]);
test.push(["hello", "he"]);
test.push(["hello", "lo"]);
test.push(["hello", "loo"]);
test.push(["izingoseturlestessis", "zin"]);
test.push(["izingoseturlestessis", "tessis"]);
test.push(["izingoseturlestessis", "izingoseturlestessis"]);
test.push(["izingoseturlestessis", ""]);
test.push(["mississippi", "issip"]);
test.push(["mississippi", "ippi"]);
test.push(["mississippi", "ippii"]);
test.push(["a", "ab"]);
test.push(["a", ""]);
test.push(["", "a"]);

verify(test);
