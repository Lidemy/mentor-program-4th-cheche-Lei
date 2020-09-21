const readline = require('readline');
const { CONNREFUSED } = require('dns'); // eslint-disable-line no-unused-vars

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

// eslint-disable-next-line no-shadow
function solve(lines) {
  const M = lines[0];
  for (let i = 1; i <= M; i += 1) {
    const group = lines[i];
    const info = group.split(' ');
    const A = info[0]; // str
    const B = info[1]; // str
    const K = info[2]; // str
    const lenA = A.length; // num
    const lenB = B.length; // num
    if (K === '1') { // 比大的
      if (lenA > lenB) {
        console.log('A');
      } else if (lenB > lenA) {
        console.log('B');
      } else if (lenA === lenB) {
        if (A > B) {
          console.log('A');
        } else if (B > A) {
          console.log('B');
        } else {
          console.log('DRAW');
        }
      }
    } else if (K === '-1') { // 比小的
      if (lenA < lenB) {
        console.log('A');
      } else if (lenB < lenA) {
        console.log('B');
      } else if (lenA === lenB) {
        if (A < B) {
          console.log('A');
        } else if (B < A) {
          console.log('B');
        } else {
          console.log('DRAW');
        }
      }
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
