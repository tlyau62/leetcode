/**
 * dc
 *
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = [];

    solve(0, '', 0);

    return res;

    function solve(start_pos, solved_ip, gp) {

        let oct;

        // last octet is handled in base case
        if (gp === 3) {
            let numOfPosRemaining;

            numOfPosRemaining = s.length - start_pos;
            if (numOfPosRemaining >= 1 && numOfPosRemaining <= 3) {
                oct = s.substring(start_pos, s.length);

                if (isValidOct(oct)) {
                    res.push(solved_ip.substring(1) + '.' + oct);
                }
            }
            return;
        }

        for (let i = 1; i <= 3; i++) {
            oct = s.substr(start_pos, i);

            if (isValidOct(oct)) {
                solve(start_pos + i, solved_ip + '.' + oct, gp + 1); // (unsolved part, solved part/acc result, state)
            } else {
                // invalid octet
            }

        }
    }

    function isValidOct(oct) {
        // oct range [0, 255] and oct is a valid string representation of integer 
        return oct <= 255 && (parseInt(oct).toString() === oct);
    }
};

/*
 * 1 111 111 1 (8) min_cut: 1, max_cut: 3
 *
 * 111255 (6) min_cut: 1, max_cut: 2
 * 2551255 (7) min_cut: 1, max_cut: 2
 * 25512255 (8) min_cut: 2, max_cut: 2
 * 0000 (4) min_cut: 1, max_cut: 1
 * 255255255255 (12) min_cut: 3, max_cut: 3
 * 25525511135 (11) min_cut: 2, max_cut: 3
 * 25525511255 (11) min_cut: 2, max_cut: 3
 * 123456
 *
 * dc
 * 12345 => 1,2345; 12,345; 123,45
 *       => 1,2,345; 1,23,45; 1,234,5; 12,3,45; 12,34,5; 12,345,_; 123,4,5; 123,45,_
 *       => 1,2,3,45; 1,2,34,5; 1,2,345,_; 1,23,4,5; 1,23,45,_; 1,234,5,_; 12,3,4,5; 12,3,45,_; 12,34,5,_; 123,4,5,_
 *       => 1,2,3,45;
 */