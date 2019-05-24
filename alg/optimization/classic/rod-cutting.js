/**
 * problem: https://www.techiedelight.com/rot-cutting/
 * 
 * @param {*} lengths 
 * @param {*} prices 
 * @param {*} rodLength 
 */
function maxProfitCut(lengths, prices, rodLength) {
    let dp, maxProfit;

    lengths = [0, ...lengths];
    prices = [0, ...prices];
    dp = [...prices];

    for (let s = 1; s <= lengths.length; s++) {
        maxProfit = dp[s];
        for (let c = 0; c <= ~~(s / 2); c++) {
            maxProfit = Math.max(maxProfit, dp[c] + dp[s - c]);
        }
        dp[s] = maxProfit;
    }

    return dp[rodLength];
}

const lengths = [1, 2, 3, 4, 5, 6, 7, 8];
const prices = [1, 5, 8, 9, 10, 17, 17, 20];
const rodLength = 4;

console.log(maxProfitCut(lengths, prices, rodLength));
