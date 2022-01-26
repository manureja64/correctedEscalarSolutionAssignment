const mongoose = require('mongoose');
const express = require('express');
const app = new express();
mongoose.connect('mongodb://localhost/escalarAssignment', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));
app.use(express.json({ limit: '50mb', extended: true })); //limit attribute is used to deal with error: "PayloadTooLargeError: request entity too large"
app.use(express.urlencoded({ limit: '50mb', extended: true })); //limit attribute is used to deal with error: "PayloadTooLargeError: request entity too large"
app.use(express.json());



var apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.use((req, res) => res.status(404).send('Invalid Link'));

//PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})




