// // # 1
// const makeNewString =  (str) => 
//     str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

// console.log(makeNewString('abc'));
// console.log(makeNewString('abcdef'));
// console.log(makeNewString('abc123abc123'));

// console.log(makeNewString('ab'));


// =======================================================

const firstHalf = (str) => str.slice(0,str.length / 2);
console.log(firstHalf('SHARIQ'));
console.log(firstHalf('SHARIQALAM'));
console.log(firstHalf('SHARIQ ALAM'));
