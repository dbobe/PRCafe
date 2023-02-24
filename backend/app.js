const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

// MIDDLEWARE
app.use(express.json());
app.use(morgan('tiny'));

// Routes

const api = process.env.API_URL;

// Database
mongoose.set({ strictQuery: false });
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database Connection is ready...');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});
