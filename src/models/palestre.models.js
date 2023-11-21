const mongoose=require("mongoose");

const palestreSchema=mongoose.Schema({
    //IDPalestra:mongoose.Types.ObjectId,
    nome:String,
    indirizzo:String,
    type:String
});
const palestreModel=mongoose.model("Gym",palestreSchema);

module.exports = {
    getGym: async function(IDPalestra){
        return await palestreModel.findOne({_id:IDPalestra});
    },

    getGyms: async function (){
        return await palestreModel.find();
    },

    /*addGym: async function (voti, nome, cognome, luogo, data){
        let nuovoStud=new palestreModel({nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
        return await nuovoStud.save()
    },

    deleteGym: async function(IDPalestra){
        return await palestreModel.deleteOne({_id:IDPalestra });
    },
    updateGym: async function(IDCerca, voti, nome, cognome, luogo, data){
        return await palestreModel.updateOne({_id: IDCerca }, {nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
    }*/
}