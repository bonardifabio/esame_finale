const mongoose=require("mongoose");

const utentiSchema=mongoose.Schema({
    //IDUtente:mongoose.Types.ObjectId,
    nome:String, //required indica un campo obbligatorio, senza sarebbe nome:String;
    cognome:String,
    nascita:{
        data:Date,
        luogo:String
    },
    voti:String //[Number]
});
const utentiModel=mongoose.model("User",utentiSchema);

module.exports = {
    getUser: async function(IDUtente){
        return await utentiModel.findOne({_id:IDUtente});
    },

    getUsers: async function (){
        return await utentiModel.find();
    },

    addUser: async function (voti, nome, cognome, luogo, data){
        let nuovoStud=new utentiModel({nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
        return await nuovoStud.save()
    },

    deleteUser: async function(IDUtente){
        return await utentiModel.deleteOne({_id:IDUtente });
    },
    updateUser: async function(IDCerca, voti, nome, cognome, luogo, data){
        return await utentiModel.updateOne({_id: IDCerca }, {nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
    }
}