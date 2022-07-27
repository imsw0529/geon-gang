const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

console.log(parsed);