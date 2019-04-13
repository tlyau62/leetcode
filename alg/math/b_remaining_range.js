/**
 * {min: 0, max: 99}
 * 
 * occup range: [{min: 5, max: 5}]
 * avail range: [{min: 0, max: 4}, {min: 6, max: 99}]
 * 
 * occup range: [{min: 5, max: 5}, {min: 8, max: 13}]
 * avail range: [{min: 0, max: 4}, {min: 6, max: 7}, {min: 14, max: 99}]
 * 
 * occup range: [{min: 0, max: 99}]
 * avail range: []
 */
function Range(min, max) {
    this.min = min;
    this.max = max;
}

/**
 * Method 1: spliting available range by occupied ranges
 * Time: O(n^2)
 * Space: O(n)
 * @param {*} avails 
 * @param {*} occups 
 */
// (function () {
//     function remain(avails, occups) {
//         let result = [JSON.parse(JSON.stringify(avails))];
//         let resultNext;

//         for (const occup of occups) {
//             resultNext = [];

//             for (const res of result) {
//                 if (occup.max < res.min || occup.min > res.max) {
//                     // no interception
//                     resultNext.push(res);
//                 } else if (occup.min === res.min && occup.max === res.max) {
//                     // complete occupy
//                     continue;
//                 } else if (occup.min > res.min && occup.max < res.max) {
//                     // contain within
//                     resultNext.push(
//                         new Range(res.min, occup.min - 1),
//                         new Range(occup.max + 1, res.max)
//                     );
//                 } else {
//                     if (occup.min <= res.min) {
//                         // lie on left of res
//                         resultNext.push(
//                             new Range(occup.max + 1, res.max)
//                         );
//                     } else {
//                         // lie on right of res
//                         resultNext.push(
//                             new Range(res.min, occup.min - 1)
//                         );
//                     }
//                 }

//                 result = resultNext;
//             }

//             result = resultNext;
//         }

//         return result;
//     }

//     const avails = new Range(0, 100);
//     const occups = [new Range(95, 99), new Range(5, 5), new Range(0, 3), new Range(8, 13), new Range(14, 15), new Range(50, 89)];

//     console.log(remain(avails, occups));
// })();

/**
 * Method 2: assign available range to the gap between occupied ranges
 * Time: O(n lg n)
 * Space: O(1), except result space
 * @param {*} avails 
 * @param {*} occups 
 */
// (function () {

//     function remain(avails, occups) {
//         const result = [];

//         occups.push(
//             new Range(avails.min - 1, avails.min - 1),
//             new Range(avails.max + 1, avails.max + 1)
//         );

//         occups = occups.sort((a, b) => a.min - b.min);

//         for (let i = 1; i < occups.length; i++) {
//             const diff = occups[i].min - occups[i - 1].max;

//             if (diff > 1) {
//                 result.push(new Range(occups[i - 1].max + 1, occups[i].min - 1));
//             }
//         }

//         return result;
//     }

//     const avails = new Range(0, 100);
//     const occups = [new Range(95, 99), new Range(5, 5), new Range(0, 3), new Range(8, 13), new Range(14, 15), new Range(50, 89)];

//     console.log(remain(avails, occups));
// })();

/**
 * Accept more range type
 * Time: O(n lg n)
 * Space: O(1), except result space
 * @param {*} avails 
 * @param {*} occups 
 */
(function () {
    const avails = new Range(0, 100);
    const occups = [new Range(95, 99), new Range(5, 5), new Range(5, 10), new Range(10, 15), new Range(0, 3), new Range(8, 13), new Range(14, 15), new Range(50, 89)];

    function remain(avails, occups) {
        const result = [];
        let cmp;

        occups = occups.sort((a, b) => a.min - b.min || b.max - a.max)
        cmp = new Range(avails.min - 1, avails.min - 1);
        occups.push(new Range(avails.max + 1, avails.max + 1));

        for (const occup of occups) {
            if (cmp.max + 1 >= occup.min) {
                cmp.max = Math.max(cmp.max, occup.max);
            } else {
                result.push(new Range(cmp.max + 1, occup.min - 1));
                cmp = occup;
            }
        }

        return result;
    }
    
    console.log(remain(avails, occups));
})();
