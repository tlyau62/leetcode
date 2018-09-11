/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W) {

    if (hand.length === 0) {
        return true;
    }

    const map = [];
    let count;

    // count
    for (let i = 0; i < hand.length; i++) {
        if (map[hand[i]] === undefined) {
            map[hand[i]] = 1;
        } else {
            map[hand[i]]++;
        }
    }

    // count
    let i, j, total, min, next;

    total = 0;
    for (i = 0; i <= map.length - W;) {
        min = next = null;
        for (j = 0; j < W; j++) {
            if (!map[i + j]) {
                i += j + 1;
                break;
            } else {
                if (min === null || map[i + j] <= min) {
                    min = map[i + j];
                    next = i + j + 1;
                }
            }
        }
        if (j === W) {
            for (j = i; j < i + W; j++) {
                map[j] -= min;
                total += min;
            }
            i = next;
        }
    }
    return total === hand.length;

};

// let result;
// result = isNStraightHand(
//     [233722108, 386144634, 221638886, 175028874, 408337082, 91410299, 793763682, 972910825, 627251147, 135020779],
//     2);
// console.log(result);

let map = new Map();
map.set(1);
map.set(2);
map.set(3);
console.log(Array.from(map.keys()));


