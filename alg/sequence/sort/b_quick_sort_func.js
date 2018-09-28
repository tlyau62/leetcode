// inspired from haskell:
// https://stackoverflow.com/questions/7717691/why-is-the-minimalist-example-haskell-quicksort-not-a-true-quicksort
// not in-place
function quick_sort(A) {
    if (A.length <= 1) {
        return A;
    }
    return quick_sort(A.filter((a) => a < A[0]))
        .concat(A.filter((a) => a === A[0]))
        .concat(quick_sort(A.filter(a => a > A[0])));
}
console.log(quick_sort([5, 4, 1, 6]));
console.log(quick_sort([]));
console.log(quick_sort([0]));