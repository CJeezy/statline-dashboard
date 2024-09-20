const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
const riotRoutes = require('./routes/riotRoutes');

// Add this line to the route section
app.use('/api/riot', riotRoutes);


// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
