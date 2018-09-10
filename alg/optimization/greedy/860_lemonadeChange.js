/**
 * greedy always return highest $
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const money = [0,0,0];
    for (const b of bills) {
        if (b === 5) {
            money[0]++;
        } else if (b === 10) {
            money[1]++;
            
            if (money[0] > 0) {
                money[0]--;    
            } else {
                return false;
            }        
        } else if (b === 20) {
            money[2]++;
            
            if (money[1] > 0) {
                money[1]--;
                if (money[0] > 0) {
                    money[0]--;    
                } else {
                    return false;
                }
            } else if (money[0] > 2) {
                money[0] -= 3;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return true;
};