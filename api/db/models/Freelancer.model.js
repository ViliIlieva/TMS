const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FreelancersSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Freelancer must have name'],
    trim: true,
    unique: true,
  },
  position: {
    type: String,
    required: [true, 'Freelancer must have position'],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true,
  },
})

const Freelancers = mongoose.model('Freelancer', FreelancersSchema)

module.exports = Freelancers