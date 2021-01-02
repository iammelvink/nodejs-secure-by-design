import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter a user name'
  },
  email: {
    type: String
  },
  hashPassword: {
    type: String,
    required: 'Enter a password'
  }
}, {
  timestamps: true
});