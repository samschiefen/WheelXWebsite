const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files (logo images) from the 'public/images' directory
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

const upload = multer({
  dest: 'uploads/', // Folder where files will be stored temporarily
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit to 5MB for example
  },
});

// Define a model (e.g., FAQ)
const FAQ = mongoose.model('FAQ', new mongoose.Schema({
  question: String,
  answer: String
}));

const NameLogo = mongoose.model('NameLogo', new mongoose.Schema({
  logo: String,
  appName: String
}));

// GET all FAQs
app.get('/faq', async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

// POST a new FAQ
app.post('/faqs/bulk-update', async (req, res) => {
  try {
    const { faqs } = req.body;
    if (!Array.isArray(faqs)) return res.status(400).json({ error: 'Invalid data' });

    // Clear existing FAQs
    await FAQ.deleteMany({});

    // Insert new FAQs
    await FAQ.insertMany(faqs);

    res.status(200).json({ message: 'FAQs updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET app settings (logo and appName)
app.get('/getLogoName', async (req, res) => {
  try {
    const settings = await NameLogo.findOne();
    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }
    res.json(settings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST to update app settings (logo and appName)
app.post('/updateLogoName', upload.single('logo'), async (req, res) => {
  try {
    const { appName } = req.body;
    let logoPath = '';

    // If there's a new logo file uploaded
    if (req.file) {
      // Set the logo path and move it to the 'public/images' folder
      const newFilePath = path.join(__dirname, '../wheelx-app/public', 'images', req.file.filename);
      fs.renameSync(req.file.path, newFilePath);

      // Update the logo path to the public URL
      logoPath = '/images/' + req.file.filename;
    }

    // Update appName and logo in the database (or create new entry if none exists)
    const existingSettings = await NameLogo.findOne();
    if (existingSettings) {
      // Update existing settings
      existingSettings.logo = logoPath || existingSettings.logo; // Keep old logo if no new one
      existingSettings.appName = appName || existingSettings.appName; // Keep old name if no new one
      await existingSettings.save();
    } else {
      // Create new settings if none exist
      await NameLogo.create({
        logo: logoPath || '/images/logo_placeholder.png', // Default placeholder logo
        appName: appName || 'My App', // Default app name
      });
    }

    res.status(200).json({ message: 'App settings updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
