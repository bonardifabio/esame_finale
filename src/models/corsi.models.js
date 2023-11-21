const mongoose=require("mongoose");

const corsiSchema=mongoose.Schema({
    nome:String,
    data:Date,
    durata:String,
    posti:Number
});
const corsiModel=mongoose.model("Course",corsiSchema);

module.exports = {
    getCourse: async function(IDCorso){
        return await corsiModel.findOne({_id:IDCorso});
    },

    getCourses: async function (){
        return await corsiModel.find();
    },

    /*addCourse: async function (voti, nome, cognome, luogo, data){
        let nuovoStud=new corsiModel({nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti});
        return await nuovoStud.save()
    },

    deleteCourse: async function(IDCorso){
        return await corsiModel.deleteOne({_id:IDCorso });
    },*/
    updateCourse: async function(IDCerca, posti){
        return await corsiModel.updateOne({_id: IDCerca }, {posti:posti});
    }
}