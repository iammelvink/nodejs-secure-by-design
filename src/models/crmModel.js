import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create & export ContactSchema
export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  }
}, {
  timestamps: true
});