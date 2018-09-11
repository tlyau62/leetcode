/**
 * 3-pass
 *
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    const dists = [];
    let dist;

    dist = -1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            dists[i] = dist = 0;
        } else if (dist >= 0) {
            dists[i] = ++dist;
        }
    }

    dist = -1;
    for (let i = seats.length - 1; i >= 0; i--) {
        if (seats[i] === 1) {
            dist = 0;
        } else if (dist >= 0) {
            dist++;
            if (dists[i] >= 0) {
                dists[i] = Math.min(dists[i], dist);
            } else {
                dists[i] = dist;
            }
        }
    }

    return Math.max(...dists);
};

maxDistToClosest([1, 0, 0, 0, 1, 0, 1]);