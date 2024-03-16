var fs = require("fs");

const data = "# Hello, world! \n\nWritten from the script.";
fs.writeFile("easy/write.md", data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
console.log("Writing to file...");
