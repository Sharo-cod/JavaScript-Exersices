// // # 1
// const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100 ;
// console.log(isEqualTo100(100,0));
// console.log(isEqualTo100(0,100));
// console.log(isEqualTo100(100,100));
// console.log(isEqualTo100(0,0));
// console.log(isEqualTo100(20,80));
// console.log(isEqualTo100(50+50,50+50));


// =========================================================

// # 2

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getFileExtension('Index.html'));
// console.log(getFileExtension('Style.css'));
// console.log(getFileExtension('Script.js'));
// console.log(getFileExtension('Script.html.js'));


// ========================================================
// # 3      

// const moveCharsForward = (str) => str.split('')
// .map(char => String.fromCharCode(char.charCodeAt(0) + 1)) 
// .join('')
 
// console.log(moveCharsForward('cdefghi'));


// ================================================

// # 4

const formatDate = (date = new Date() ) =>{
    const day = date.getDay() + 1
    const months = date.getMonth() + 1
    const years = date.getFullYear()
    return `${day}/${months}/${years}`
} 
console.log(formatDate());

// ===================================

// # 5

// const addNew = (str) => `New! ${str}`
// console.log(addNew('offer'));

// ====================END OF FIRST EXERCISE ===============================