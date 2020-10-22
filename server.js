const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Constants
const LOCAL_HOST = 'mongodb://localhost/my_database';
const MONGOOSE_OPTIONS = { useNewUrlParser: true };
const URL = process.env.MONGODB_URI || LOCAL_HOST

// importing files
const routes = require('./routes');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; // Default to port available in Heroku


// Connect to MONGODB URI exposed by Heroku
mongoose.connection.once('open', function () {
    console.info('MongoDB event open');
    console.debug('MongoDB connected [%s]', URL);

    mongoose.connection.on('connected', function () {
        console.info('MongoDB event connected');
    });

    mongoose.connection.on('disconnected', function () {
        console.warn('MongoDB event disconnected');
    });

    mongoose.connection.on('reconnected', function () {
        console.info('MongoDB event reconnected');
    });

    mongoose.connection.on('error', function (err) {
        console.error('MongoDB event error: ' + err);
    });
});

mongoose.connect(URL, function (err) {
    if (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(1);
    }
});

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// Send the static build files to the server
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});
