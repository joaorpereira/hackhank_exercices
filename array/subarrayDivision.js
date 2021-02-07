const array = [1, 2, 1, 3, 2]
const d = 3
const m = 2

function birthday(s, d, m) {
    // let count = 0
    // let soma = 0
    // let j = 0
    // let newArr = []
    // let subArray = []
    // for(let j = 0; j < m; j++){
    //     for(let i = 0; i < s.length; i ++){
    //         if(subArray.length < m){
    //             subArray.push(s[i])
    //         }
    //     }
    //     newArr = [...newArr, subArray]
    //     console.log(subArray)
    // }
    // console.log(newArr)
    // // console.log(newArr)
    // // if(soma === d){
    // //     count += 1
    // // }

    // // console.log(count)

    let sum = 0;
    let count1 = 0;
    for(let i = 0; i < s.length - m + 1; i++){
        sum = 0;
        for(let j = 0; j < m; j++) {
            sum += s[i+j];
        }
        if(sum == d) {
            count1++;
        }
    }
    return count1;

}

console.log(birthday(array, 3 ,2))