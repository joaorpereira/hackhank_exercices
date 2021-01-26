const numberOfLetRotations = 4

const array = [1, 2, 3, 4, 5]


function rotateLeft(d, arr) {
    
    let newArray = []

    for(let i = d; i < arr.length; i++){
        newArray.push(arr[i])        
    }

    for(let i = 0; i < d; i++){
        newArray.push(arr[i])        
    }

    return newArray
}

rotateLeft(numberOfLetRotations, array)