/* mind flow:
 * 1. scan from left to right => array left,
 *    then scan from right to left => array right,
 *    compare both array left and right to the result
 * 2. result[i] = max(left[i], right[i])
 *
 *
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const mem = [];

    for (const r of ratings) {
        mem.push(1);
    }

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            mem[i] = mem[i - 1] + 1;
        }
    }


    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            mem[i] = Math.max(mem[i], mem[i + 1] + 1);
        }
    }


    return mem.reduce((a, b) => a + b);

}

var candy3 = function (ratings) {
    let isDec, cur, sum;

    sum = cur = 1;
    isDec = ratings[1] < ratings[0];

    for (let i = 1; i < ratings.length; i++) {
        if (isDec) {
            if (ratings[i] >= ratings[i - 1]) {
                cur = 1;
                isDec = false;
            }
        } else {
            if (ratings[i] < ratings[i - 1]) {
                cur = 0;
                isDec = true;
            }
        }
        sum += ++cur;
    }

    return sum;
}

// not work, update issue
var candy2 = function (ratings) {
    const res = [];

    for (let i = 0; i < ratings.length; i++) {
        res.push(1);
    }

    for (let i = 0; i < ratings.length; i++) {
        if (i - 1 >= 0 && ratings[i] < ratings[i - 1]) {
            res[i - 1]++;
        }
        if (i + 1 < ratings.length && ratings[i] < ratings[i + 1]) {
            res[i + 1]++;
        }
    }

    console.log(res);

    return res.reduce((a, b) => a + b);
};
