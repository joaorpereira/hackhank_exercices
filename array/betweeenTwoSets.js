const a = [2, 3]
const b = [2, 4]

const array = [16, 32, 96]

for( let i = 0; i < a.length; i++){
    for (let i = 0; i < array.length; i++){
        const rest = (array[i] % a[i] === 0) && true
        console.log(rest, array[i], a[i])
    }
}
// console.log('___')
// for( let i = 0; i < b.length; i++ ){
//     for (let item of array){
//         const rest = (item % b[i] === 0) && true
  
//         console.log(rest, item, b[i])
//     }
// }
