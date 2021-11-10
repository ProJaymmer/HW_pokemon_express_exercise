const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokeData');

// GET REQUEST (READ) AN ARRAY OF OBJECTS
router.get('/', (req, res) => {
	res.json(pokemon);
});

// GET REQUEST SINGLE ID -- SHOW SINGLE OBJECT
router.get('/:id', (req, res) => {
	let selectedPokemon = pokemon.filter((pokemon) => {
		return pokemon.id == req.params.id;
	});

	pokemon = selectedPokemon;
	res.json(pokemon);
});

// DELETE REQUEST -- SHOW DELETED OBJECT
router.delete('/:id', (req, res) => {
	let deletedPoke = pokemon.filter((pokemon) => {
		return pokemon.id == parseInt(req.params.id);
	});
	pokemon = deletedPoke;
	res.json(pokemon);
});

// POST REQUEST -- SHOW CREATED OBJECT
router.post('/', (req, res) => {
	pokemon.push(req.body);
	console.log(`We've added`, req.body.name);
	res.json(pokemon);
});
// PUT REQUEST -- SHOW UPDATED OBJECT
router.put('/:id', (req, res) => {
	const id = req.params.id - 1;
	pokemon[id] = req.body;

	res.json(pokemon[id]);
});

// EXPORT
module.exports = router;
