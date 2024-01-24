let s = [2, 2, 1, 3, 2]
let d = 4
let m = 2

function birthday(s, d, m) {
    // Write your code here
    let sum = 0
    let count = 0
    for (let index = 0; index <= (s.length - m); index++) {
        //console.log(`Out ${s[index]}`)
        for (let index2 = 0; index2 < m; index2++) {
            sum = sum + s[index + index2]
        }
        if (sum === d) {
            count += 1
        }
        sum = 0
    }
    return count
}


function birthday2(s, d, m) {
    let num = s;
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
        let arrayElement = num.slice(i, m + i);//recordando com invervalo m
        nums.push(arrayElement);
    }
    if (num.length === 1 && num[0] === d) { /// 
        count++;
    } else {
        nums.forEach((el) => {
            if (add(el) === d) {
                count++;
            }
        });
    }


    return count;
}

console.log(birthday2(s, d, m))