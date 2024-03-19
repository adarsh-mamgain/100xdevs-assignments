var fs = require("fs");

fs.readFile("medium/dirty-file.txt", "utf8", (err, data) => {
  console.log("Reading from file...");
  data = data.replace(/\s+/g, " ");
  fs.writeFile("medium/clean-file.txt", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Writing to file...");
  });
});
