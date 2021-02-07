// const array = [10, 5, 20, 20, 4, 5, 2, 25, 1,]
const array2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let contMax = 0
    let contMin = 0
    for(let i = 0; i < scores.length; i++){   
        if(scores[i] > max){
            max = scores[i] 
            contMax += 1
        } else if(scores[i] < min){
            min = scores[i] 
            contMin += 1
        }
     
    }
    return [contMax,contMin]
}

// breakingRecords(array)
breakingRecords(array2)


