// bucket sort
// ref: https://zh.wikipedia.org/wiki/%E6%A1%B6%E6%8E%92%E5%BA%8F#JavaScript%E5%AE%9E%E7%8E%B0%E7%AE%97%E6%B3%95

Array.prototype.bucketSort = function (num) {

    // swap elements in array
    function swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    const max = Math.max(...this)
    const min = Math.min(...this)
    const buckets = []
    const bucketsSize = Math.floor((max - min) / num) + 1
    
    for (let i = 0; i < this.length; i++) {
        const index = ~~(this[i] / bucketsSize)
        !buckets[index] && (buckets[index] = [])
        buckets[index].push(this[i])
        let l = buckets[index].length
        
        // if elements in array are evenly distributed in range (min, max)
        // meaning each bucket has only 1 element
        // following sort is close to O(1)
        // which yield O(n) sort in best case
        while (l > 0) {
            buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1)
            l--
        }
    }

    // bucket is sorted and elements inside are also sorted
    let wrapBuckets = []
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
    }
    return wrapBuckets
}
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]
console.log(arr.bucketSort(10))