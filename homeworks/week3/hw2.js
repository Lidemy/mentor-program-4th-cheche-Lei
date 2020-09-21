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
  const tmp = lines[0].split(' ');
  const n = Number(tmp[0]);
  const m = Number(tmp[1]);
  if (n >= 1 && n <= m <= 10 ** 6) {
    for (let i = n; i <= m; i += 1) {
      const iStr = i.toString();
      const digits = iStr.length;
      let sum = 0;
      for (let j = 0; j < digits; j += 1) {
        const ans = Number(iStr[j]) ** (digits);
        sum += ans;
      }
      if (sum === i) {
        console.log(i);
      }
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
