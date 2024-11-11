function superDigit(n, k) {
    let digitSum = (number) => {
        return number.toString().split('').reduce((sum, element) => sum + parseInt(element), 0);
    };

    let initialSum = digitSum(n) * k;

    while (initialSum >= 10) {
        initialSum = digitSum(initialSum);
    }

    return initialSum;
}

console.log(superDigit(9875, 2));