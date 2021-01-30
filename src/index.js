const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));

app.listen(3000);