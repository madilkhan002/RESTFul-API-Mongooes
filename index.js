const express = require('express');
const app  = express();
const router = require('./routes/router')
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',router)


const PORT = 8000;

app.listen(PORT, ()=> console.log(`Listening to PORT ${PORT}.....`));