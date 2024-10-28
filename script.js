/* Exercise # 01
   -------------
Write a Javascript promgram to check two numbers and return true if one of the number is 100 or if the sum of two numbers is 100

*/

    const mystring = (a,b) => a === 100 || b === 100 || (a + b === 100);

    console.log(mystring(100,0));
    console.log(mystring(0,100));

    console.log(mystring(10,0));
    console.log(mystring(0,10));

    console.log(mystring(80,20));
    console.log(mystring(50,50));

    console.log("______________________________________________________________");
    console.log("______________________________________________________________");
    



/* ...............................................................................
                              COMPLETED
   ............................................................................... */


/* Exercise # 02
   -------------
Write  a javsript program to get extesion of a file name.

*/

 const GetFileExtension = (str) => str.slice(str.lastIndexOf('.'))

 console.log(GetFileExtension("index.html"));
 console.log(GetFileExtension("text.config.js"));


 
 console.log("______________________________________________________________");
 console.log("______________________________________________________________");
 


/* ...............................................................................
                              COMPLETED
   ............................................................................... */



/* Exercise # 03
   -------------
   Write a javascript program to replace every character in a given string with character followubg it in the alphabet 

*/

const moveCharsForward = (str) => str.split('')
.map(char => String.fromCharCode(char.charCodeAt (0) + 1 )).join('');

console.log(moveCharsForward('abcdefgh'));



console.log("______________________________________________________________");
console.log("______________________________________________________________");


/* ...............................................................................
                              COMPLETED
   ............................................................................... */