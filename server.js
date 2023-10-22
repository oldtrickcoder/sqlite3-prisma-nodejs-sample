const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const PORT = 7777;
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

// parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(BodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ mesg: "SQLITE3 PRISMA API SAMPLE" });
});

app.listen(PORT, () => {
  console.log(`Server Listen at Port ${PORT}`);
});
