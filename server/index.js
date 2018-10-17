const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = process.env.PORT || 3001;

app.use(json())

app.listen(port, () => {
  console.log(`Listenting on port ${port}`);
});
