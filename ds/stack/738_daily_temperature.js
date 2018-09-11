/**
 * problem: https://leetcode.com/problems/daily-temperatures/description/
 * 
 * just a variant of problem 496_next_greater.number1.js
 * note: care about repeat elements
 * 
 * code can be improved since this implementation is programmed lazily!!!
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const res = [];
    const map = new Map();
    const stack = [temperatures[0]];
    
    map.set(temperatures[0], [0]);
    
    for (let i = 0; i < temperatures.length; i++) {
        res[i] = 0;
    }
    
    let temp, temp2, temp3;
    for (let i = 1; i < temperatures.length; i++) {
        while (temperatures[i] > stack[stack.length - 1]) {
            temp = stack.pop();
            temp2 = map.get(temp);
            for (let j = 0; j < temp2.length; j++) {
                res[temp2[j]] = i - temp2[j];
            }
            temp2.length = 0;
        }
        stack.push(temperatures[i]);
        temp3 = map.get(temperatures[i]);
        if (temp3 === undefined) {
            map.set(temperatures[i], [i]);    
        } else {
            temp3.push(i);   
        }
    }
    
    return res;
    
};