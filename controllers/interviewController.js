const InterviewModel = require('../models/interviewModel');


const getAllInterviews = async () => {
  return InterviewModel.find({});
}

const createInterview = async (data) => {
  const interview = new InterviewModel(data);
  return interview.save();
}



module.exports = {
  createInterview,
  getAllInterviews
}
