const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const n = 9

function sockMerchant(n, ar) {
  let countMap = {}
  let numberOfPAirs = 0

  for (const element of ar) {
    if (countMap[element]) {
      countMap[element] += 1
    } else {
      countMap[element] = 1
    }
  }

  for (const [key, value] of Object.entries(countMap)) {
    if (Number(value) / 2 > 0) {
      const newValue = Number(value) / 2
      numberOfPAirs += Math.floor(newValue)
    }
  }
  console.log(numberOfPAirs)
}

sockMerchant(n, ar)
