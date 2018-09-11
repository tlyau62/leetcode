/**
 * dc, dp (top down) beat 100%
 *
 * base case
 * - n = 0 => totalBST = 1
 * - n = 1 => totalBST = 1
 * - n = 2 => totalBST = 2
 * - totalBST of an root val = leftBST of its left child * rightBST of its right child
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {

    const map = new Map();
    return solve(0, n - 1, n);

    function solve(start, end, total) {

        if (total <= 0) {
            return 1;
        } else if (total <= 2) {
            return total;
        }

        let leftNum, rightNum; // leftNum = num of elements on the left
        let leftBST, rightBST; // leftBST = num of unique BST on leftNum
        let totalBST = 0;

        for (let mid = start; mid <= end; mid++) {
            leftNum = mid - start;
            rightNum = end - mid;

            leftBST = map.get(leftNum);
            rightBST = map.get(rightNum);
            if (leftBST === undefined) {
                leftBST = solve(start, mid - 1, leftNum);
                map.set(leftNum, leftBST);
            }
            if (rightBST === undefined) {
                rightBST = solve(mid + 1, end, rightNum);
                map.set(rightNum, rightBST);
            }

            totalBST += leftBST * rightBST;
        }

        return totalBST;
    }

};

numTrees(3);

/**
 * n = 3 => [1, 2, 3]
 * 
 * [|,2,3] => leftBST = 1, rightBST = 2 => totalBST = 1 * 2 = 2
 * [1,|,3] => leftBST = 1, rightBST = 1 => totalBST = 1 * 1 = 1
 * [1,2,|] => leftBST = 2, rightBST = 1 => totalBST = 2 * 1 = 2
 * totalBST = 2 + 1 + 2 = 5
 * 
 * 
 * n = 4 => [1, 2, 3, 4]
 * [|,2,3,4] => [|,|,3,4] => totalBST = 2
 * [|,2,3,4] => [|,2,|,4] => totalBST = 1
 * [|,2,3,4] => [|,2,3,|] => totalBST = 2 => totalBST = 5 (memory 3)
 * 
 * [1,|,3,4] => totalBST = 5 {base case 1, 2}
 * [1,2,|,4] => totalBST = 5 {base case 1, 2}
 *
 * [1,2,3,|] => totalBST = 5 {memory 3}
 * 
 */