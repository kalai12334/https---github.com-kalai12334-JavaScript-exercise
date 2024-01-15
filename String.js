let str=" kalai vani               ";
console.log(str);
let str1=str.length
console.log(str1)
//uppercase
 console.log(str.toUpperCase())
 //lowercase
console.log(str.toLowerCase())
 //split
 console.log(str.trim())
// //typeof
//console.log(str.lastIndexOf(6))
 console.log(str.split(""));
 console.log(str.substring(0,9));
 console.log(str.charAt(4))
 console.log(str.replace('kalai','vani'))

 let a1="kalai";
 console.log(typeof a1);
 let a=new String("kllla");
 console.log(typeof a);

//String immutabele--> if we reassign the value object also memory will not change, it is point to another memeory location in heap memory.
//Concat
let firstName="Skalai";
let lastName="vani";
console.log(firstName.concat(lastName));

let FullName="kalaivani";
console.log(FullName.endsWith('kalai'));
console.log(FullName.startsWith('kalai'));
console.log(FullName.search('a'));
// let numb1=1;
// let numb2="1"
// console.log(numb1==numb2)
// console.log(numb2===numb1) //data type is differ

