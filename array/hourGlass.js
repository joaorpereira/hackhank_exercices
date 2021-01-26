const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]

function hourGlassSum(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; (j < arr.length -2) && (i < arr.length -2); j++){            
            let soma2 =             
            arr[i][j] + 
            arr[i][j+1] + 
            arr[i][j+2] +
            arr[i+1][j+1] + 
            arr[i+2][j] + 
            arr[i+2][j+1] + 
            arr[i+2][j+2]                       
            if(soma2 > soma){
                soma = soma2
            }   
        }
    }
    console.log(soma)
}

hourGlassSum(arr)




































// const initialFileUrl = [1,2,3]
// const fileUrl = [4,2,5]

// const filteredImages = [...new Set([...initialFileUrl ,...fileUrl])]

// console.log(filteredImages)

// const initialFileUrl = [1,2,3]
// const fileUrl = [4,2,3,4,5,6]

// let filteredImages = initialFileUrl.filter(x => fileUrl.includes(x));

// console.log(filteredImages)


// const data = Date.now()
// console.log(data)

// let filteredImages = fileUrl.filter(x => !initialFileUrl.includes(x));

// console.log(filteredImages)