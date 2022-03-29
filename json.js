console.log("{aaa: si}");
// de json a javascript
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 3, 4, 6]"));
JSON.parse("[1, 3, 4, 6]").map((el) => console.log(el * el));

// de javascript a json

console.log(typeof JSON.stringify([1, 2, 4, 5, 9]));
