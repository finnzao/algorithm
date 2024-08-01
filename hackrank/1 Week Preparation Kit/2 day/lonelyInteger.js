///Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    let repeatArray = []
    let lonelyInteger = []
    for (let index = 0; index < a.length; index++) {
        const elementOut = a[index];
        for (let index2 = index + 1; index2 < a.length; index2++) {
            const elementIn = a[index2];
            if (elementIn == elementOut) {
                repeatArray.push(elementIn)
            }
        }
    }
    lonelyInteger = a.filter(value => !repeatArray.includes(value));
    return lonelyInteger

}


const array = [1, 2, 3, 4, 3, 2, 1]
const array1 = [1]
lonelyinteger(array1)