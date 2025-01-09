const fs = require("fs");

const readFile = fs.readFileSync("./00.BasicsOfBackend.js");
const readContent = readFile.toString();
console.log(readContent);
console.log("End of File!");
