//Create JavaScript Map
// const map1 = new Map(); 
// console.log(map1); 
//Insert Item to Map
let map1 = new Map();
map1.set('info', {name: 'Jack', age: 26});
console.log(map1);
//Insert Item to Map
let map2 = new Map();
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); 
//Access Map Elements
let map3 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
console.log(map1.get('info')); 
//Check Map Elements
const set1 = new Set([1, 2, 3]);
let map4 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
console.log(map1.has('info'));
//Removing Elements
let map5 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map1.delete('address'); 
console.log(map1);  

map1.delete('info'); 
console.log(map1);
//JavaScript Map Size
let map6 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

console.log(map1.size); 

//Iterate Through a Map
let map7 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}
