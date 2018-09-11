/**
 * time: O(n), space: O(1)
 * 
 * use recursion to handle the state of the pentheses
 * - everytime see a '(', do recursion
 * use global var cur_s to handle the current index of S among all states
 * 
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {

    let cur_s;

    cur_s = 0;

    return dfs(S);

    function dfs(S) {

        if (S[cur_s] === ')') {
            cur_s++;
            return 1;
        }

        let sum = 0;
        while (cur_s < S.length) {
            if (S[cur_s] === '(') {
                cur_s++;
                sum += dfs(S);
            } else {
                cur_s++;
                return 2 * sum;
            }
        }

        return sum;
    }
};

scoreOfParentheses("(()(()))");