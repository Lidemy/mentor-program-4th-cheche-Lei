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
  const N = Number(lines[0]);
  if (N >= 1 && N <= 100) {
    for (let i = 1; i < N + 1; i += 1) {
      const P = Number(lines[i]);
      if (P >= 1 && P <= 100000) {
        const devide = [];
        for (let j = 1; j < P + 1; j += 1) {
          if (P % j === 0) {
            devide.push(j);
          }
        }

        if (devide.length === 2) {
          console.log('Prime');
        } else { console.log('Composite'); }
      }
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
