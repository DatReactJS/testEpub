const fs = require("fs");

console.log("1234");

fs.writeFile(
  "index1.html",
  Buffer.from(
    "<p><strong><em>123123123</em></strong></p><p><br></p><p><strong>\\\12312312</strong></p>"
  ),
  (err) => {
    console.log(err);
  }
);
