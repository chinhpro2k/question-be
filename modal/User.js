const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
     
    },
    type:{
        type:String,
    },
    age:{
        type:Number
    },
    birthday:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    idPlan:{
        type:String
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User;