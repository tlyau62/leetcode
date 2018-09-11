/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {

    const map = new Map(); // key = char, val: {start: index of 1st appear, end: index of last appear}
    S += '$';

    // preprocess S to map
    for (let i = 0; i < S.length; i++) {
        if (!map.has(S[i])) {
            map.set(S[i], { start: i, end: null });
        }
    }

    let temp;
    for (let i = S.length - 1; i >= 0; i--) {
        temp = map.get(S[i]);
        if (temp.end === null) {
            temp.end = i;
        }
    }

    // merge range in map
    const res = [];
    const map_entries = map.entries();
    let cur_part;

    cur_part = map_entries.next().value[1];
    // console.log(cur_part);
    for (const [k, v] of map_entries) {
        // console.log(v);
        if (v.start > cur_part.end) {
            // use '$' to force adding the last partition to cur_part
            res.push(cur_part.end - cur_part.start + 1);
            cur_part = v;
        } else if (v.end > cur_part.end) {
            cur_part.end = v.end;
        }
    }

    return res;

};