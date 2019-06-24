/**
 * keywords:
 * 1. O(n) with 2 pointers
 * 
 * key points:
 * 1. max area of height h = max width that its index can span
 * 2. start looping from max width
 *    each loop:
 *        area = min height * current width window, max height is ignored until the next loop
 *
 * side notes:
 * 1. how to write loop
 * - don't consider it as loop first
 * - think 1 case of the loop body with fixed parameter
 * - then use loop to modify the parameter
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) { // O(n)
    let left, right, max, lh, rh, width;
    
    max = 0;
    left = 0;
    right = height.length - 1;
    
    while (left < right) {
        lh = height[left];
        rh = height[right];
        width = Math.abs(left - right);
        if (lh < rh) {
            max = Math.max(max, lh * width);
            left++; // no need to consider height[left] again since max area of left is calculated
        } else {
            max = Math.max(max, rh * width);
            right--;
        }
    }
    
    return max;
};

var maxArea_2 = function(height) { // timeout
    let max = 0;
    let h, l, r, w, max_h_from_min_hs;
    
    for (w = height.length - 1; w >= 1; w--) { // calculate from max width
        max_h_from_min_hs = 0;
        for (l = 0, r = l + w; r < height.length; l++, r++) { // l++, r++ => slide window to left
            max_h_from_min_hs = Math.max(max_h_from_min_hs, Math.min(height[l], height[r]));
        }
        max = Math.max(max, w * max_h_from_min_hs);
    }
    
    return max;
};


var maxArea_1 = function(height) { // timeout
    let max = 0;
    let h, l, r, w;
    
    for (w = height.length - 1; w >= 1; w--) { // calculate from max width
        for (l = 0, r = l + w; r < height.length; l++, r++) { // l++, r++ => slide window to left
            h = Math.min(height[l], height[r]);
            max = Math.max(max, w * h);   
        }   
    }
    
    return max;
};