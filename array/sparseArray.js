const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

function matchingStrings(strings, queries) {
  let memmory = {};
  for (let string of strings) {
    memmory[string] = (memmory[string] || 0) + 1;
  }

  return queries.map((query) => memmory[query] || 0);
}

matchingStrings(strings, queries);

// function matchingStrings(str, query) {
//   return query.map((x) => str.filter((y) => y === x).length)
// }
