# Range.js
Range.js

1) create file index.js
2) run npm init 
3) run npm i range-js-caw
4) const Range = require('range-js-caw')

# Examples

let  r1 = new Range('0..14');

# looping 

a.each((i) => console.log(i)) or  a.each(function(i)  {console.log(i)}) 
 //  prints 
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14


# check if value exists in range 

 console.log(a.includes(-5)); // false



# check if two ranges are equals 
console.log(a.equals('0..14')); // true

# get max value in range 
console.log(a.max);  // 14

# get min value in range 
console.log(a.min);  // 0


# convert range to array 
console.log(a.toArray()); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

