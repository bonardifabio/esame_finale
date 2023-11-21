const utentiModel = require("../models/utenti.models.js");

module.exports = {
    getUsers: async function(req, res) {
     res.send(await utentiModel.getUsers());
    }, 

    addUser: async function (req, res) {
            res.send(await utentiModel.addUser(req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data));
    },

    getUser: async function (req, res) {
        res.send(await utentiModel.getUser(req.params.IDUtente));
    },

    updateUser: async function (req, res){
        await utentiModel.updateUser(req.params.IDUtente, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data);
            res.send("utente "+ req.params.IDUtente + " modificato");
    },

    deleteUser: async function (req, res){
        await utentiModel.deleteUser(req.params.IDUtente);
            res.send("utente "+ req.params.IDUtente + " cancellato");
    } 
}