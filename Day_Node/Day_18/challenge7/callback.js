const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.error("Error reading file:", err);

  console.log("File Content:", data);

  setTimeout(() => {
    console.log("Read operation completed");
  }, 1000);
});

console.log("This runs first — async behavior shown");
