/// PERFOM ARRAY 
arr = [1, 3, 2, 6, 1, 2]

function divisibleSumPairs(n, k, ar) {
    pars = 0
    ar.forEach((elementOut, indexOut, arr) => {
        console.log(indexOut)
        arr.forEach((elementIn, indexIn) => {
            console.log(indexIn)
            if (elementOut + elementIn % k === 0 & indexOut > indexIn) {
                pars += 1
            }
        })

    });
    return pars

}
function abc(n, k, ar) {
    let pars = 0;
    for (let i = 0; i < ar.length; i++) {
    
        for (let j = i + 1; j < ar.length; j++) {
  
            if ((ar[i] + ar[j]) % k === 0) {
                pars += 1;
            }
        }
    }
    return pars;
}

divisibleSumPairs(6, 5, arr)
//abc(6, 5, arr)
