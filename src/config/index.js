import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'DB_NAME',
  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET_WORD'
};
