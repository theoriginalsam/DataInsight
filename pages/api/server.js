import mongoose from 'mongoose';

// Define your Mongoose schema for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

// Create a Mongoose model based on the schema
const FormDataModel = mongoose.model('FormData', formDataSchema);

// MongoDB connection string
const mongoURI = 'mongodb+srv://datainsight:12345@cluster0.lf0iiaq.mongodb.net/AIConsultingDB';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// The API route handling POST requests to save form data
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      // Create a new document using the FormDataModel
      const newFormData = new FormDataModel({
        name,
        email,
        phone,
        message,
      });

      // Save the form data to MongoDB
      await newFormData.save();

      res.status(200).json({ message: 'Form data saved successfully',redirect: '../index.tsx' });
 

    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Error saving form data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
