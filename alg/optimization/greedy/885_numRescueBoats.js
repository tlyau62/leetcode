/**
 * link: https://leetcode.com/problems/boats-to-save-people/description/
 * 1st try: greedy, start on heaviest ppl
 *
 * prove:
 * 1.
 * if people[left] + people[right] > limit,
 * then people[left] cannot pair up with any other people[right < x < left],
 * since people[right] is the lightest people,
 * the sum of people[left] and people[x] exceeds the limit,
 * so people[left] alone needs a boat.
 * 
 * since people[right] may pair up with people[x],
 * so people[right] doesn't need a boat at current moment
 * 
 * 2.
 * if people[left] + people[right] <= limit,
 * why pair up people[left] with people[right],
 * but no people[right - 1] or people[right - 2], ...
 * 
 * if people[left] + people[right - 1] > limit
 * then they cannot be paired and both needs 1 boat
 * 
 * if people[left] + people[right - 1] <= limit
 * then people[left + 1] + people[right - 1] also <= limit
 * since people[left + 1] < people[left],
 * so people[left + 1] can pair with people[right - 1] and
 * people[left] can pair with people[right] 
 * 
 * ex.
 * [5,4,2,1]
 * 10
 * [8,7,3,1]
 * 10
 * 
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let left, right, sum, boats;

    people = people.sort((a, b) => b - a);
    left = 0;
    right = people.length - 1;
    boats = 0;

    while (left < right) {
        sum = people[left] + people[right];

        if (sum <= limit) {
            right--;
        }
        boats++;
        left++;
    }

    return boats + ~~(left === right);
};