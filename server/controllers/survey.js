//Connect to surveys model
let Surveys = require('../models/surveys');

//get route for the product list page -read operation
module.exports.displaySurveyList = (req, res, next) => {
  Surveys.find((err, surveyResponseList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render(
        './surveys/list',
        {
          title: 'Survey Response List',
          SurveyResponseList: surveyResponseList,
          displayname: req.user ? req.user.displayname : '',
        },
      );
    }
  });
};

// Get route for displaying the Add page - Create operation
module.exports.displayAddSurveyResponse = (req, res, next) => {
  res.render(
    './surveys/add',
    {
      title: 'Add Survey Response',
      displayname: req.user ? req.user.displayname : '',
    },
  );
};

// Post route for processing the Add page - Create operation
module.exports.addSurveyResponse = (req, res, next) => {
  let newSurveyResponse = Surveys({
    personName: req.body.personName,
    currentStatus: req.body.currentStatus,
    emailId: req.body.emailId,
    unemploymentDuration: req.body.unemploymentDuration,
    reasonForUnemployment: req.body.reasonForUnemployment,
    mentalHealthOnUnemployment: req.body.mentalHealthOnUnemployment,
    localActionOnUnemployment: req.body.localActionOnUnemployment,
  });
  Surveys.create(newSurveyResponse, (err, surveyResponse) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/surveys');
    }
  });
};

// Get route for displaying the Edit page - Update operation
module.exports.displayEditSurveyResponse = (req, res, next) => {
  let id = req.params.id;
  Surveys.findById(id, (err, surveyResponseToEdit) => {
    if (err) {
      console.log(err);
      // res.end(err);
    } else {
      res.render(
        './surveys/edit',
        {
          title: 'Edit Product',
          surveyResponseToEdit: surveyResponseToEdit,
          displayName: req.user ? req.user.displayName : '',
        },
      );
    }
  });
};

// Post route for processing the Add page - Update operation
module.exports.editSurveyResponse = (req, res, next) => {
  let id = req.params.id;
  let editedSurveyResponse = Surveys({
    _id: id,
    personName: req.body.personName,
    currentStatus: req.body.currentStatus,
    emailId: req.body.emailId,
    unemploymentDuration: req.body.unemploymentDuration,
    reasonForUnemployment: req.body.reasonForUnemployment,
    mentalHealthOnUnemployment: req.body.mentalHealthOnUnemployment,
    localActionOnUnemployment: req.body.localActionOnUnemployment,
  });
  Surveys.updateOne({ _id: id }, editedSurveyResponse).then(_ => {
    res.redirect('/surveys');
  }).catch(err => {
    console.log(err);
    // res.end(err);
  });
};

// get route for deletion - Delete operation
module.exports.deleteSurveyResponse = (req, res, next) => {
  let id = req.params.id;
  Surveys.remove({ _id: id }, (err) => {
    if (err) {
      // res.end(err);
      console.log(err);
    } else {
      res.redirect('/surveys');
    }
  });
};
