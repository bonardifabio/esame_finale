const corsiModel = require("../models/corsi.models.js");

module.exports = {
    getCourses: async function(req, res) {
        try {
            res.send(await corsiModel.getCourses());
        } catch (error) {
            res.status(500).send(error);
        }

    }, 

    /*addCourse: async function (req, res) {
            res.send(await corsiModel.addCourse(req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data));
    },*/

    getCourse: async function (req, res) {
        try {
            res.send(await corsiModel.getCourse(req.params.IDCorso));
        } catch (error) {
            res.status(500).send(error);
        }
    },

    /*updateCourse: async function (req, res){
        await corsiModel.updateCourse(req.params.IDCorso, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data);
            res.send("Corso "+ req.params.IDCorso + " modificato");
    },

    deleteCourse: async function (req, res){
        await corsiModel.deleteCourse(req.params.IDCorso);
            res.send("Corso "+ req.params.IDCorso + " cancellato");
    }*/
}