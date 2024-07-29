function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    //WORST
    // arr
    //     .filter((_, i) => i !== max)
    //     .forEach((element) => sumMin += element)
    // arr
    //     .filter((_, i) => i !== min)
    //     .forEach((element) => sumMax += element)
    // Calculate sumMin and sumMax
    let sumMin = totalSum - max;
    let sumMax = totalSum - min;

    console.log(sumMin, sumMax);
}

miniMaxSum([1, 2, 3, 4, 5]);
