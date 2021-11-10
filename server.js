// EXPRESS SERVER SETUP
const express = require('express');
require('dotenv').config();
const app = express();

// POSTMAN SETUP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// IMPORT CONTROLLERS
const pokeController = require('./controllers/pokeController');
app.use('/pokemon', pokeController);

// PORT STUFF
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('Pokemon HW is Live on Port 4000');
});
