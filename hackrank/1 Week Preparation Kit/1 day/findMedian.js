function findMedian(arr) {
    arr.sort((a, b) => a - b);

    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        return arr[mid];
    }

    return (arr[mid - 1] + arr[mid]) / 2;
}

const array = [5, 3, 1, 2, 4];
console.log(findMedian(array)); 