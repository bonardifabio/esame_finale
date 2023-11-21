const palestreModel = require("../models/palestre.models.js");

module.exports = {
    getGyms: async function(req, res) {
        try {
            res.send(await palestreModel.getGyms());
        } catch (error) {
            res.status(500).send(error);
        }
     
    }, 

    /*addGym: async function (req, res) {
            res.send(await palestreModel.addGym(req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data));
    },*/

    getGym: async function (req, res) {
        try {
            res.send(await palestreModel.getGym(req.params.IDPalestra));
        } catch (error) {
            res.status(500).send(errore);
        }
    },

    /*updateGym: async function (req, res){
        await palestreModel.updateGym(req.params.IDPalestra, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data);
            res.send("Palestra "+ req.params.IDPalestra + " modificato");
    },

    deleteGym: async function (req, res){
        await palestreModel.deleteGym(req.params.IDPalestra);
            res.send("Palestra "+ req.params.IDPalestra + " cancellato");
    }*/
}