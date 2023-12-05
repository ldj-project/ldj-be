const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${ PORT }`);
});