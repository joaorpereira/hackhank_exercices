let arr = [1,2,3,4]

let newArray = []

function reversedArray(arr){
    const arrayLength = arr.length
    for(let i = arrayLength -1; i >= 0; i--){
        const value = arr[i]
        newArray = [...newArray, value]
    }
    return newArr
}

reversedArray(arr)



