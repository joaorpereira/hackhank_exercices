const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  const newArray = arr.sort((a,b) => a-b) 
  let soma1 = 0;
  let soma2 = 0;
  for (let i = 0; i < newArray.length - 1; i++) {
    soma1 += newArray[i];
  }

  for (let j = 1; j < newArray.length; j++) {
    soma2 += newArray[j];
  }

  console.log(soma1, soma2);
}

miniMaxSum(arr);
