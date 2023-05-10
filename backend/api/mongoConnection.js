import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI not found in the environment. Please make sure the .env file is set up correctly.');
  process.exit(1);
}

const client = new MongoClient(uri, { useUnifiedTopology: true });

export default client;