var fs = require("fs");

/*console.log("Begin reading file");
var data = fs.readFile("input.txt")
console.log(data.toString());
console.log("End reading file");
console.log("Begin appending file");
fs.appendFile("input.txt", "I'm appending a file");
console.log("End appending file");
console.log("Begin re-reading file");
var anotherData = fs.readFile("input.txt")
console.log(anotherData.toString());
console.log("Finish re-reading file");
*/

console.log("Begin reading file");
fs.readFile('input.txt', (err, data1) => {
  if (err) throw err;
  console.log(data1.toString());
  console.log("End reading file");
  console.log("Begin appending file");
fs.appendFile('input.txt', 'Im appending a file', (err) => {
  if (err) throw err;
  //console.log('The "Im appending a file" was appended to file!');
  console.log("End appending file");
  console.log("Begin re-reading file");
fs.readFile('input.txt', (err, data2) => {
  if (err) throw err;
  console.log(data2.toString());
  console.log("Finish re-reading file");
});
});
});






