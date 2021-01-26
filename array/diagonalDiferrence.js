const array = [
    [11, 2, 4],
    [4,  5, 6],
    [10, 8, -12],
]

function diagonalDifference(arr) {
    let soma = 0
    let soma2 = 0
    for(let i = 0; i < arr.length; i++){
        soma += arr[i][i]  
        soma2 += arr[arr.length - 1 - i][i]    
    }
    const total = soma - soma2
    
    if(total < 0){
        return total * -1
    }
    return total 
}

const result = diagonalDifference(array)
