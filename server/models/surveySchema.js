let mongoose = require('mongoose');
let surveyModel = mongoose.Schema
(
    {
        personName: String,
        currentStatus:String,
        emailId:String,
        unEmploymentDuration: String,
        reasonForUnemployment:String,
        mentalHealthOnUnemployment:String,
        localActionOnUnemployment:String,
    },
    
);
module.exports = mongoose.model('surveySchema', surveyModel);