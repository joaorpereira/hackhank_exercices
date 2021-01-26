const array = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  const newArray = candles.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[0] === newArray[i]) {
      result += 1;
    }
  }

  return result;
}

birthdayCakeCandles(array);
