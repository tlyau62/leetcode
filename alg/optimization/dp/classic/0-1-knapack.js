/**
 * test case
 * http://artemisa.unicauca.edu.co/~johnyortega/instances_01_KP/
 * https://people.sc.fsu.edu/~jburkardt/datasets/knapsack_01/knapsack_01.html
 * 
 * @param {*} capacity 
 * @param {*} prices 
 * @param {*} weights 
 */
function knapack(capacity, prices, weights) {
    // subproblem: sub-knapack
    const mem = [new Array(capacity + 1).fill(0)];

    prices.unshift(0);
    weights.unshift(0);

    for (let i = 1; i < prices.length; i++) {
        mem.push([0]);
    }

    for (let i = 1; i < prices.length; i++) {
        for (let c = 1; c <= capacity; c++) {
            mem[i][c] = Math.max(
                mem[i - 1][c],
                (prices[i] + mem[i - 1][c - weights[i]]) || 0
            );
        }
    }

    return mem[mem.length - 1][capacity];
}

let res;
// res = knapack(
//     4,
//     [1500, 3000, 2000],
//     [1, 4, 3]);
// console.log(res); // 3500

// res = knapack(
//     269,
//     [55, 10, 47, 5, 4, 50, 8, 61, 85, 87],
//     [95, 4, 60, 32, 23, 72, 80, 62, 65, 46]);
// console.log(res); // 295

res = knapack(
    750,
    [135, 139, 149, 150, 156, 163, 173, 184, 192, 201, 210, 214, 221, 229, 240],
    [70, 73, 77, 80, 82, 87, 90, 94, 98, 106, 110, 113, 115, 118, 120]);
console.log(res); // 1458
