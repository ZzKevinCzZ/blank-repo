import os from "os";
import { byteToSize } from "./FreeMemory.mjs";

console.log("System Information:");
console.log(
    `Operation System: ${os.type()} (${os.platform()} ${os.release()})`
);
console.log(`Free Memory: ${byteToSize(os.freemem())}`);
console.log(`Total Memory: ${byteToSize(os.totalmem())}`);