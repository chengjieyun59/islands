const fs = require('fs');

const data = fs.readFileSync(process.stdin.fd, 'utf-8');
const map = data.replace(/\n$/, "").split('\n').map(row => row.split(''));
console.log(map);