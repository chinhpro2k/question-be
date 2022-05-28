const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
})

const Plan = mongoose.model('Plan', PlanSchema)

module.exports = Plan;