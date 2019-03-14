if (process.argv.length < 3) { console.log("Please enter your key."); return;}
const key = process.argv[2];
let min = 1;
let max = 5;
let value = 0;
console.log()
//Use Math objects max() and min() method
value = key;
value = Math.min(Math.max(min,value),max);
console.log("A: %s -- Math.max(value,min) & Math.min(value,max)",value);
//Use if ... else...
vlaue = key;
if (value < min) value = min;
else if (value > max) value = max;

console.log("A: %s -- if (value<min) else if (value>max)",value);
//Use ?: operators
vlaue = key;
value < min ? value = min : value > max ? value = max : null;

console.log("A: %s -- value<min ? min : value>max ? max : null",value);
//