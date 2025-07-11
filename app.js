const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const { User, Store, Rating } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend API Running');
});

// Sync DB
sequelize.sync({ alter: true }).then(() => {
  console.log('DB Synced');
}).catch(err => {
  console.error('Error syncing DB:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
