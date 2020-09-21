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
  const s = lines[0];
  const len = s.length;
  // console.log(s)
  // console.log(len)
  if (len >= 1 && len <= 100) {
    let rev = '';
    for (let i = len - 1; i >= 0; i -= 1) {
      rev += s[i];
    }
    // eslint-disable-next-line no-unused-expressions
    (s === rev) ? (console.log('True')) : (console.log('False'));
  }
}


rl.on('close', () => {
  solve(lines);
});
