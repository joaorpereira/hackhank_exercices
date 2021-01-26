const array = [73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      const newNum = String(grades[i])[1];
      if (newNum < 5) {
        let number = 5 - newNum;
        if (number < 3) {
          grades[i] = Number(String(grades[i])[0] + 5);
        }
      } else {
        let number = 10 - newNum;
        if (number < 3) {
          grades[i] = Number(String(Number(String(grades[i])[0]) + 1) + 0);
        }
      }
    }
  }
  return grades;
}

console.log(gradingStudents(array));
