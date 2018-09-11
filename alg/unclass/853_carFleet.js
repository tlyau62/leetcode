/**
 * explain:
 * time and position can be 
 * used to determine when a car will pass ahead another,
 * where time is the time to reach the target destination
 * 
 * assume there are car A, B.
 * A pass ahead B when A pos < B pos but B time > A time
 * 
 * So,
 * sort cars first based on their position
 * group by cars based on their time and position
 * 
 * time: O(n lg n)
 * 
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {

    if (position.length === 0) {
        return 0;
    }

    const cars = position.map((pos, i) => {
        return {
            pos: pos,
            time: (target - pos) / speed[i] // to determine pass ahead
        };
    }).sort((a, b) => b.pos - a.pos);

    let fleet, head;

    fleet = 1;
    head = cars[0];
    for (let i = 1; i < cars.length; i++) {
        if (cars[i].time > head.time) {
            fleet++;
            head = cars[i];
        }
    }

    return fleet;
};

// test case
// 13, [11, 10, 7, 6, 5, 4, 2], [1, 7, 5, 4, 10, 9, 5]
// 20, [15, 4, 10, 12, 17, 19, 11, 14, 6, 0, 2], [4, 8, 1, 2, 8, 8, 10, 7, 10, 8, 6]

//  target: 20
//  pos spd time    group
//	19	8	0.125	a
// 	17	8	0.375	b
// 	15	4	1.25	c
// 	14	7	0.8571	c
// 	12	2	4	    d
// 	11	10	0.9	    d
// 	10	1	10	    e
// 	6	10	1.4	    e
// 	4	8	2	    e
// 	2	6	3	    e
// 	0	8	2.5	    e
//
//  target: 13
//  pos spd time group
//	11	1	2	 a
//	10	7	0.42 a
//	7	5	1.2	 a
//	6	4	1.75 a
//	5	10	0.8	 a
//	4	9	1	 a
//	2	5	2.2	 b
