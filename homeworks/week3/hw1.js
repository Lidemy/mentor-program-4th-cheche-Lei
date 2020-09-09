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
  const n = lines[0];
  // console.log(n)
  if (n >= 1 && n <= 30) {
    for (let i = 1; i <= n; i += 1) {
      let star = '';
      // console.log(i)
      for (let j = 1; j <= i; j += 1) {
        // console.log(n)
        star += '*';
      }
      console.log(star);
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
