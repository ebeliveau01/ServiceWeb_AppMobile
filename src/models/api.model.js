// À ajuster selon la structure
const sql = require("../config/db");

const Livres = function(livre) {
    this.id = livre.id,
    this.uuid = livre.uuid,
    this.nom = livre.nom,
    this.description = livre.description,
    this.auteurNom = livre.auteurNom,
    this.nombrePage = livre.nombrePage,
    this.disponible = livre.disponible,
    this.image = livre.image,
    this.imageBase = livre.imageBase
};

Livres.getLivres = () => {
    return new Promise((resolve, reject) => {
        const requete = `SELECT * FROM livres`;
        const params = []

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

Livres.addLivre = (uuid,nom,description,auteurNom,nombrePage,disponible,image,imageBase) => {
    return new Promise((resolve, reject) => {
        const requete = `INSERT INTO livre (uuid,nom,description,auteurNom,nombrePage,disponible,image,imageBase) VALUES (?,?,?,?,?,?,?,?)`;
        const params = [uuid,nom,description,auteurNom,nombrePage,disponible,image,imageBase]

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

Livres.removeLivre = (uuid) => {
    return new Promise((resolve, reject) => {
        const requete = `DELETE FROM livre WHERE uuid = ?`;
        const params = [uuid]

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

Livres.updateLivre = (uuid,disponible) => {
    return new Promise((resolve, reject) => {
        const requete = `UPDATE taches SET disponible = ? WHERE uuid = ?`;
        const params = [disponible,uuid]

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

module.exports = Livres;