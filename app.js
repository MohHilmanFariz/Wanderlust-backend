const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const itineraryRoutes = require('./routes/itineraryRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // To support URL-encoded bodies
app.use(morgan('dev'));

// Routes
app.use('/api', itineraryRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
