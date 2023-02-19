import mongoose from 'mongoose';
const dbUri = process.env.MONGO_URI || '';
const options:mongoose.ConnectOptions= {};

if (!dbUri) {
  throw new Error('MONGO_URI not set in environment variables');
}

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUri, options);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
}

export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from database');
  } catch (error) {
    console.error('Error disconnecting from database: ', error);
  }
}