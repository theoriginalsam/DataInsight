// api/server.tsx

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Define your Mongoose schema for the form data
const formDataSchemaWork = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

// Create a Mongoose model based on the schema
const FormDataModelWork = mongoose.models.Work || mongoose.model('work', formDataSchemaWork);

const mongoURI = 'mongodb+srv://datainsight:12345@cluster0.lf0iiaq.mongodb.net/AIConsultingDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions) // Type assertion to ConnectOptions
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      // Create a new document using the FormDataModel
      const newFormDataWork = new FormDataModelWork({
        name,
        email,
        phone,
        message,
      });
      console.log(newFormDataWork);
      // Save the form data to MongoDB
      await newFormDataWork.save();

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Error saving form data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
