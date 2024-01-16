const array = [4, 5, 6, 9, 1]
const num = 5

console.log(num in array)


// for (let x in array) {
//     console.log(x)
// }


for (let x of array) {
    console.log(x)
}