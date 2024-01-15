const str = 'guitar';
console.log('The original string is: ' + str);
let reversedStr = '';
let len=str.length 
console.log(len);
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log('The reversed string is: ' + reversedStr);
//test