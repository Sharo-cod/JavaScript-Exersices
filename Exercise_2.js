// // # 1
// const makeNewString =  (str) => 
//     str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

// console.log(makeNewString('abc'));
// console.log(makeNewString('abcdef'));
// console.log(makeNewString('abc123abc123'));

// console.log(makeNewString('ab'));


// =======================================================
// # 2

// const firstHalf = (str) => str.slice(0,str.length / 2);
// console.log(firstHalf('SHARIQ'));
// console.log(firstHalf('SHARIQALAM'));
// console.log(firstHalf('SHARIQ ALAM'));

// ========================================================
// # 3

// const concatenate = (str1, str2) => 
//     str1.slice(1) + str2.slice(1);

// console.log(concatenate('abc' ,'def'));
// console.log(concatenate('Junior' , 'Developer'));

// ==========================================================
// # 4 
const closetTo100 = (a,b) => (100 - a) < (100 - b) ? a : b ;

console.log(closetTo100(99, 1));
console.log(closetTo100(49, 51));
console.log(closetTo100(50, 50));    