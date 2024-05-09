const Livres = require("../models/api.model");

exports.getLivres = (req, res) => {
    Livres.getLivres()
    .then((livres) => {
        res.send({
            livres
        });
    });
};

exports.addLivre = (req, res) => {
    var uuid = req.body.uuid;
    var nom = req.body.titre;
    var description = req.body.description;
    var auteurNom = req.body.auteurNom;
    var nombrePage = req.body.nombrePage;
    var disponible = req.body.disponible;
    var image = req.body.image;
    var imageBase = req.body.imageBase;

    Livres.addLivre(uuid,nom,description,auteurNom,nombrePage,disponible,image,imageBase)
    .then((livre) => {
        res.send({
            "message": `Le livre: ${uuid}, a été ajoutée avec succès.`,
        });
    });
};

exports.removeLivre = (req, res) => {
    var uuid = req.params.uuid

    Livres.removeLivre(uuid)
    .then((livre) => {
        res.send({
            "message": `Le livre avec l'uuid: ${uuid}, a été supprimée avec succès.`,
        });
    });
};

exports.updateLivre = async (req, res) => {
    var uuid = req.params.uuid;
    var complete = req.body.complete;
    
    Livres.updateSousTache(uuid,complete)
    .then((livre) => {
        res.send({
            "message": `Le livre avec l'uuid: ${uuid}, a été modifiée avec succès.`,
        });
    });
};