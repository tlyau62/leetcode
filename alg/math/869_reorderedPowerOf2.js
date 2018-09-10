/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {

    const N_str = N.toString();
    const N_len = N_str.length;
    const p2_list = getPowerOf2(N_len);

    let len_count, temp;
    let i, j;

    for (i = 0; i < p2_list.length; i++) {
        len_count = 0;
        for (j = 0; j < N_str.length; j++) {
            temp = p2_list[i].get(N_str[j]);
            if (temp === undefined || temp <= 0) {
                break;
            }
            p2_list[i].set(N_str[j], temp - 1);
            len_count++;
        }
        if (len_count === N_len) {
            return true;
        }
    }

    return false;


    function getPowerOf2(len) {
        const list = [];
        let p2 = 1, p2_str = p2.toString(), p2_len = p2_str.length, map;
        while (p2_len <= N_len) {
            if (p2_len === N_len) {
                map = new Map();
                Array.from(p2_str).forEach(digit => {
                    if (!map.has(digit)) {
                        map.set(digit, 1);
                    } else {
                        map.set(digit, map.get(digit) + 1);
                    }
                });
                list.push(map);
            }
            p2 *= 2;
            p2_str = p2.toString();
            p2_len = p2_str.length;
        }
        return list;
    }
}

let res;
res = reorderedPowerOf2(2084);
console.log(res);
res = reorderedPowerOf2(2085);
console.log(res);
res = reorderedPowerOf2(4097);
console.log(res);
res = reorderedPowerOf2(6940);
console.log(res);