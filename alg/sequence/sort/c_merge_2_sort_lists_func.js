// functional
function merge(A, B) {
    if (A.length === 0 && B.length === 0) {
        return A;
    } else if (A.length === 0) {
        return B;
    } else if (B.length === 0) {
        return A;
    }

    if (A[0] < B[0]) {
        return [A[0], ...merge(A.slice(1), B)];
    } else {
        return [B[0], ...merge(A, B.slice(1))];
    }
}

console.log(merge([1, 3, 5], [2, 4, 6]));
console.log(merge([1, 5, 9, 14, 17], [1, 6, 6, 9, 14, 15]));