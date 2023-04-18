let mongoose = require('mongoose');
let surveyModel = mongoose.Schema
(
    {
        personName: String,
        currentStatus:String,
        emailId:String,
        unemploymentDuration: String,
        reasonForUnemployment:String,
        mentalHealthOnUnemployment:String,
        localActionOnUnemployment:String,
    },

);
module.exports = mongoose.model('surveySchema', surveyModel);
