// prob: https://leetcode.com/problems/delete-and-earn/description/
// related prob: https://leetcode.com/problems/house-robber/description/
// see explain in 740_delete_and_earn.png
// time: O(n), n = max(nums), accepted
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    const map = new Array(Math.max(...nums) + 1).fill(0);

    for (const n of nums) {
        map[n] += n;
    }

    for (let i = 2; i < map.length; i++) {
        // map[i] = max{map[i - 2] with current score or map[i - 1] without current score}
        map[i] = Math.max(map[i - 2] + map[i], map[i - 1]);
    }

    return map[map.length - 1];
};