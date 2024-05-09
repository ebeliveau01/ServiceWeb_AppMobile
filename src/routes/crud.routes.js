const express = require('express');
const router = express.Router();
const Livres = require('../controllers/api.controller');

router.post('/add', (req, res) => {
    Livres.addLivre(req,res);
});

router.delete('/delete', (req, res) => {
    Livres.removeLivre(req,res);
});

router.put('/update', (req, res) => {
    Livres.updateLivre(req,res);
});

module.exports = router;
