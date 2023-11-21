const prenotazioniModel = require("../models/prenotazioni.models.js");
const corsiModel = require("../models/corsi.models.js");
const palestreModel = require("../models/palestre.models.js");

module.exports = {
    /*getBookings: async function(req, res) {
     res.send(await prenotazioniModel.getBookings());
    }, */

    addBooking: async function (req, res) {
        try {
            const corso= await corsiModel.getCourse(req.body.IDCorso);
            if(corso.posti>0){
                const palestra= await palestreModel.getGym(req.body.IDPalestra);
                const prenotazione=await prenotazioniModel.addBooking(req.body.IDCorso,req.body.IDPalestra,req.body.IDUtente);
                await corsiModel.updateCourse(req.body.IDCorso,corso.posti-1)
                res.send("palestra: "+palestra.nome+", corso: "+corso.nome+", codice alfanumerico: "+prenotazione._id);
            }
        else
            res.status(400).send("Posti esauriti per questo corso");
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getBooking: async function (req, res) {
        try {
            res.send(await prenotazioniModel.getBooking(req.params.IDUtente));
        } catch (error) {
            res.status(500).send(error);
        }
    },

    /*updateBooking: async function (req, res){
        await prenotazioniModel.updateBooking(req.params.IDUtente, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data);
            res.send("utente "+ req.params.IDUtente + " modificato");
    },*/

    deleteBooking: async function (req, res){
        try {
            const prenotazione = await prenotazioniModel.getBooking(req.params.IDPrenotazione);
            const corso = await corsiModel.getCourse(prenotazione.IDCorso);
            const oggi= new Date();
            var Difference_In_Time = oggi.getTime() - corso.data.getTime(); 
            const daysDiff =Difference_In_Time / (24 * 60 * 60 * 60);
            console.log(daysDiff)
        if(daysDiff>1){
            await prenotazioniModel.deleteBooking(req.params.IDPrenotazione);
            res.send("prenotazione "+ req.params.IDPrenotazione + " cancellata");
        }
        else
            res.status(400).send("La prenotazione non può essere cancellata in quanto è passato più di 1 giorno")
        } catch (error) {
            res.status(500).send(error);
        }
        
   }    
}
