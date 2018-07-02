/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    heaters = heaters.map(h => h - 1);

    let count = heaters.length, i = 0;
    let temp;
    while (count < houses.length) {
        temp = [];
        for (const [i, heater] of heaters.entries()) {
            if (heater - 1 >= 0 && houses[heater - 1] !== -1) {
                temp.push(heater - 1);
                houses[heater - 1] = -1;
            }
            if (heater + 1 < houses.length && houses[heater + 1] !== -1) {
                temp.push(heater + 1);
                houses[heater + 1] = -1;
            }
            houses[heater] = -1;
        }
        count += temp.length;
        i++;
        heaters = temp;
    }

    return i;
};

let result;
result = findRadius([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 4]);
console.log(result);