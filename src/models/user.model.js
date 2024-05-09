const sql = require("../config/db.js");

exports.validationCleApi = (cleApi) => {
    return new Promise((resolve, reject) => {
        const requete = 'SELECT count(*) FROM User WHERE cle_api = ?';
        const parametres = [cleApi];

        sql.query(requete, parametres, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
}