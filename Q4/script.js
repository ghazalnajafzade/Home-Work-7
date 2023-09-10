let map = new Map();

map.set("name", "John");

let keys = map.keys();

let array = Array.from(keys);

array.push("more");
console.log(array);
