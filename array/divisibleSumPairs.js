const array = [1, 3, 2, 6, 1, 2]
const n = 6
const k = 3

function divisibleSumPairs(n, k, ar) {
    const sum = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if((i < j) && ((ar[i] + ar[j]) % k === 0)){
                sum += 1
            }
        }
    }
    return sum
}

divisibleSumPairs(n,k,array)