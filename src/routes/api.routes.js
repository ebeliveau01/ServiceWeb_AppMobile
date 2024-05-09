const express = require('express');
const router = express.Router();
const Livres = require('../controllers/api.controller');

router.get('/tous', (req, res) => {
    Livres.getLivres(req,res);
});

module.exports = router;
