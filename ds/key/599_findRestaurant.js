/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const map = new Map();

    // add list1 to map
    for (const [i, el] of list1.entries()) {
        map.set(el, i);
    }

    // cal min
    const map2 = new Map();
    let min = null, temp, sum;
    for (const [i, el] of list2.entries()) {

        // slower if removed
        if (min !== null && i > min) {
            break;
        }

        temp = map.get(el);
        if (temp !== undefined) {
            sum = i + temp;
            if (min === null || sum <= min) {
                map2.set(el, sum);
                min = sum;
            }
        }
    }

    // output
    const result = [];
    for (const [el, sum] of map2.entries()) {
        if (sum === min) {
            result.push(el);
        }
    }

    return result;
};

let result;
result = findRestaurant(
    ["k", "KFC"],
    ["k", "KFC"]
);
console.log(result);