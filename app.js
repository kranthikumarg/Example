const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiproject' ,{ useMongoClient: true })

const app = express();

//Routes
const users = require('./routes/users');

//Middelewares
app.use(logger('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', users);

//Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    //Respond to server
    res.status(status).json({
        error: {
            message: error.message
        }
    });

    //Respond to ourselves
    console.error(err);
});

//Start server
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Server is working ${port}`));