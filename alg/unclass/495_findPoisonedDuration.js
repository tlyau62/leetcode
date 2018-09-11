/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {

    if (duration === 0) {
        return 0;
    }

    let total, last;

    total = 0;
    last = null;

    timeSeries.push(timeSeries[timeSeries.length - 1] + duration);

    for (let i = 0; i < timeSeries.length; i++) {

        if (last !== null) {
            if (timeSeries[i] < last.to) {
                total += timeSeries[i] - last.from;
            } else {
                total += duration;
            }
        }
        last = {
            from: timeSeries[i],
            to: timeSeries[i] + duration
        };

        // console.log(`time: ${timeSeries[i]} total: ${total} last: ${last}`);
    }

    return total;
};