import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

// Create & export UserSchema
export const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  hashPassword: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Compare password with hashPassword
UserSchema.methods.comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};