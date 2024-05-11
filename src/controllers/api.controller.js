const Livres = require("../models/api.model");

exports.getLivres = (req, res) => {
    Livres.getLivres()
    .then((livres) => {
        res.send({
            livres
        });
    });
};

exports.addLivre = async (req, res) => {
    var uuid = req.body.uuid;
    var nom = req.body.titre;
    var description = req.body.description;
    var auteurNom = req.body.auteurNom;
    var nombrePage = String(req.body.nombrePage);
    var disponible = req.body.disponible;
    var image = req.body.image;
    var imageBase = req.body.imageBase;

    if (disponible == "false") {
        disponible = 0
    }
    else {
        disponible = 1
    }

    if (imageBase == "false") {
        imageBase = 0
    }
    else {
        imageBase = 1
    }

    let livres = await Livres.getLivre(uuid);
    console.log(livres)

    if (livres.lenght != 0) {
        Livres.addLivre(uuid,nom,description,auteurNom,nombrePage,disponible,image,imageBase)
        .then((livre) => {
            res.send({
                "message": `Le livre: ${uuid}, a été ajoutée avec succès.`,
            });
        });
    }
    else {
        res.send({
            "message": `Le livre: ${uuid}, a déjà été ajoutée.`,
        });
    }
};

exports.removeLivre = (req, res) => {
    var uuid = req.body.uuid

    Livres.removeLivre(uuid)
    .then((livre) => {
        res.send({
            "message": `Le livre avec l'uuid: ${uuid}, a été supprimée avec succès.`,
        });
    });
};

exports.updateLivre = async (req, res) => {
    var uuid = req.body.uuid;
    
    Livres.updateLivre(uuid)
    .then((livre) => {
        res.send({
            "message": `Le livre avec l'uuid: ${uuid}, a été modifiée avec succès.`,
        });
    });
};