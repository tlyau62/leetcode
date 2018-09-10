// nums1 = [1,3]
// nums2 = [2]
// res = 2

// nums1 = [1,3]
// nums2 = [2,3,4]
// res = 3

// nums1 = [1,5]
// nums2 = [2,3,4]
// res = 3

// nums1 = [1,9,12,13,14,15]
// nums2 = [2,8,10]
// res = 10

// 1,2,3
// 1,2,3

// 1,2,8,9,10,12,13,14,15
// 1,2,3,4, 5, 6, 7, 8, 9

function solve(nums1, nums2) {
    const union_set = union(nums1, nums2);
    const total = nums1.length + nums2.length;
    let median;

    if (total % 2 === 0) {
        median = (union_set.pop() + union_set.pop()) / 2;
    } else {
        median = union_set.pop();
    }
    return median;
};

function union(nums1, nums2) {
    const union = [];
    let i, j, k, mid, total;

    i = j = k = 0;
    total = nums1.length + nums2.length;
    mid = Math.floor(total / 2);

    while (k <= mid && i < nums1.length && j < nums2.length) {
        union.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
        k++;
    }

    while (k <= mid && i < nums1.length) {
        union.push(nums1[i++]);
        k++;
    }

    while (k <= mid && j < nums2.length) {
        union.push(nums2[j++]);
        k++;
    }

    return union;
}


let result;
result = solve([1, 3], [2]);
console.log(result + ' ' + (result === 2));

result = solve([1, 3], [2, 3, 4]);
console.log(result + ' ' + (result === 3));

result = solve([1, 5], [2, 3, 4]);
console.log(result + ' ' + (result === 3));

result = solve([1, 9, 12, 13, 14, 15], [2, 8, 10]);
console.log(result + ' ' + (result === 10));

result = solve([1, 2], [3, 4]);
console.log(result + ' ' + (result === 2.5));