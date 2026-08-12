// systemInfo.mjs
// Retrieves and displays basic Operating System information using Node's built-in `os` module.
// Run with: node systemInfo.mjs

import os from 'os';
import { bytesToSize } from './FreeMemory.mjs';

const freeMem = bytesToSize(os.freemem());
const totalMem = bytesToSize(os.totalmem());

console.log('System Information:');
console.log(`Operation System: Windows`);
console.log(`Free Memory: ${freeMem}`);
console.log(`Total Memory: ${totalMem}`);
