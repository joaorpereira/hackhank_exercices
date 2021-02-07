const oranges = [5, -6];
const apples = [-2, 2, 1];

const s = 7;
const t = 11;

const a = 5;
const b = 15;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let orangeArray = oranges;
  let applesArray = apples;
  let someOrange = 0;
  let someApple = 0;

  for (let i = 0; i < applesArray.length; i++) {
    applesArray[i] = Number(applesArray[i] + a);
    if (applesArray[i] >= s && applesArray[i] <= t) someApple++;
  }

  for (let i = 0; i < orangeArray.length; i++) {
    orangeArray[i] = Number(orangeArray[i] + b);
    if (orangeArray[i] >= s && orangeArray[i] <= 11) someOrange++;
  }

  console.log(applesArray);
  console.log(someApple);
  console.log(someOrange);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
