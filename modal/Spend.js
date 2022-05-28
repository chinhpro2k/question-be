const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpendSchema = new Schema({
    title: {
        type: String
    },
    price: {
        type: String,
    },
    userId:{
        type:String,
    },
    type:{
        type:String,
    }
})

const Spend = mongoose.model('Spend', SpendSchema)

module.exports = Spend;