
//test
let fruits=['apple','bannana', 'oranges']
console.log(fruits);
fruits.push("guva")
console.log(fruits);
fruits.pop("guva")
console.log(fruits);
fruits.unshift("cucumber");
console.log(fruits);
fruits.shift("cucumber");
console.log(fruits);
fruits.shift("banana");
console.log(fruits);
console.log(fruits.length);
fruits.forEach(eachfruit=>{
    console.log(eachfruit);
})
let number=[1,2,34,5];
console.log(number.concat(fruits));
console.log(typeof number);
console.log(number.concat(fruits),[1,2]);
console.log(number.join('=>'));
console.log(typeof number.join('=>'));
number.fill(9,9,9,9)
console.log(number);
