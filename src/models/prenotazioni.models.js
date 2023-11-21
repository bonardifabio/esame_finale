const mongoose=require("mongoose");

const prenotazioniSchema=mongoose.Schema({
    IDCorso:mongoose.Types.ObjectId,
    IDPalestra:mongoose.Types.ObjectId,
    IDUtente:mongoose.Types.ObjectId
});
const prenotazioniModel=mongoose.model("Booking",prenotazioniSchema);

module.exports = {
    getBooking: async function(IDPrenotazione){
        return await prenotazioniModel.findOne({_id:IDPrenotazione});
    },

    getBookings: async function (){
        return await prenotazioniModel.find();
    },

    addBooking: async function (IDCorso,IDPalestra,IDUtente){
        let nuovo=new prenotazioniModel({IDCorso,IDPalestra,IDUtente});
        return await nuovo.save()
    },

    deleteBooking: async function(IDPrenotazione){
        return await prenotazioniModel.deleteOne({_id:IDPrenotazione });
    },
    /*updateBooking: async function(IDCerca, IDCorso,IDPalestra,IDUtente){
        return await prenotazioniModel.updateOne({_id: IDCerca }, {nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
    }*/
}