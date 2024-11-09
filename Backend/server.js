// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
const userRoutes = require('./src/routes/userRoutes');

app.use('/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message || 'Something went wrong!' });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
