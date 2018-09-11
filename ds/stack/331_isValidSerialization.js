/**
 * solved by stack
 * 
 * a note
 * - remember to add s2.length >= 2
 *   on s2[s2.length - 2], s2[s2.length - 1], ...
 * 
 * 
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    let s1, s2;

    s1 = preorder.split(',');

    while (!(s1.length === 1 && s1[0] === '#')) {
        s2 = [];

        // remove some symbol accordings to rules
        for (const sym of s1) {
            if (s2.length >= 2 && s2[s2.length - 2] !== '#' && s2[s2.length - 1] === '#' && sym === '#') {
                s2.pop();
                s2.pop();
            }
            s2.push(sym);
        }

        // no symbol is removed
        if (s1.length === s2.length) {
            return false;
        }

        s1 = s2;
    }

    return true;

};

/**
 * test cases
 * "#,#,#"
 * "1,#,#,#"
 * "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * "1,#"
 * "9,#,#,1"
 * "#"
 * "#,1,#,2,#"
 * "9,3,4,#,#,1,#,#,2,#,6,#,9,3,4,#,#,1,#,#,2,#,6,#,#"
 */