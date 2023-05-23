const mongoose = require("mongoose");
const candidateSchema = new mongoose.Schema({

  candidate_name: {
    type: String,
    required: true
  },
  partyname: {
    type: String,
    required: true,
    unique: true
  },
  // qualification:{
  //   type: String,
  //   required : true
  // },

  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  cnic: {
    type: String,
    required: true,
    unique: true
  },
  // dob:{
  //   type: Date,
  //   required: true
  // },

});
module.exports = mongoose.model("Candidate", candidateSchema)
