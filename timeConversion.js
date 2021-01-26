const time = "12:45:54PM";
const time2 = "12:45:54PM";

function timeConversion(s) {
  let hour = s.slice(0, 8).split(":");

  if (s[8] === "P" && hour[0] != 12) {
    hour[0] = Number(hour[0]) + 12;
  }
  if (s[8] === "P" && hour[0] === 12) {
    hour[0] = 12;
  }
  if (s[8] === "A" && hour[0] == 12) {
    hour[0] = "00";
  }

  return hour.join(":");
}

console.log(timeConversion(time));
