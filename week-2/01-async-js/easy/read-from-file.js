var fs = require("fs");

fs.readFile("easy/3-read-from-file.md", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Reading from file...");
