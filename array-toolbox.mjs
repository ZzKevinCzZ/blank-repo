let a = [1, 2, 3, 4, 5, 5];
let b = 0;

//Return 0 if the array is empty 
if (a.length === 0) {
    console.log(0);
}

//sum of all numbers in the array
for (let i = 0; i < a.length; i++) {
    b += a[i];
}
console.log(b);

//caculate the average of all numbers in the array
let sum = b; //at this point b is equal to 9
let average = sum / a.length;
console.log(average);

//return the unique numbers in the array while preserving the original order
let unique = [];
for (let i = 0; i < a.length; i++) {
    if (!unique.includes(a[i])) {
        unique.push(a[i]);
    }
}
console.log(unique);

//divide the array into smaller array containing no more than the specified number of elements
let chunkSize = 2;
let chunks = [];
for (let i = 0; i < a.length; i += chunkSize) {
    chunks.push(a.slice(i, i + chunkSize));
}
console.log(chunks);

//returns the new array containing the unique values found in both arrays
let c = [4, 5, 6, 7, 8];
let intersection = a.filter(value => c.includes(value));
console.log(intersection);
