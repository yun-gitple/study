import { readFileSync } from 'fs';

const file = readFileSync('/Users/jongha.yun/tmp/event_0928.csv', 'utf-8');
console.log(file.replace(' ', ','));