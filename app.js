const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/React_Library', {useNewUrlParser: true, useUnifiedTopology: true});

const bookRoute = require('./routes/api/books')

app.use(bookRoute);
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello World!');
} )


app.listen(PORT, () => {
    console.log(`Running Server on port ${PORT}`);
})