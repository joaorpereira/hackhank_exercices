const array = [1, 1, 4, 4, 5, 3]

function migratoryBirds(arr) {
  const countMap = {};
  let result = []

  for (const element of arr) {
    if (countMap[element]) {
      countMap[element] += 1;
    } else {       
      countMap[element] = 1;
    }
  }

  let bigestValue = Math.max(...Object.values(countMap))

  for (const [key, value] of Object.entries(countMap)){
    if(Number(value) === bigestValue){
      result = [...result, key]
    }
  }

  return result[0]
}
migratoryBirds(array)


// if(!result){
//   result = 
// }
// console.log(item + " " + countMap[item])
// array = [...array, countMap[item]]