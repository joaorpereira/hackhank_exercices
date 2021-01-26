

const array = [ 
    [6],
    [-4, 3, -9, 0, 4, 1,],
]

function plusMinus(arr) {
    const n = arr[0]
    const values = arr[1]
    let positive = 0
    let negative = 0
    let zeros = 0

    for(let i = 0; i < values.length; i++){
        if (values[i] > 0){
            positive += 1     
        } else if(values[i] < 0){
            negative += 1
        } else {
            zeros += 1
        }
    }
    console.log((positive/n).toFixed(6))
    console.log((negative/n).toFixed(6))
    console.log((zeros/n).toFixed(6))
}

plusMinus(array)