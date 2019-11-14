/**
 * problem: https://leetcode.com/problems/distribute-candies-to-people/
 * 
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let dist = 1, ppl = 0;
    const res = new Array(num_people).fill(0);

    while (candies > 0) {
        if (dist <= candies) {
            res[ppl] += dist;
            candies -= dist;
            dist++;
            ppl = (ppl + 1) % num_people;
        } else {
            res[ppl] += candies;
            break;
        }
    }

    return res;
};
