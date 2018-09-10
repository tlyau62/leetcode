/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let x, y;

    for (let i = Math.floor(Math.sqrt(area)); i >= 1; i--) {
        if (area % i === 0) {
            x = area / i;
            y = i;

            return [x, y];
        }
    }
};

let result;
result = constructRectangle(1);
console.log(result);