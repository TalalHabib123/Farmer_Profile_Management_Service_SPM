// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
const userRoutes = require('./src/routes/userRoutes');
const farmerRoutes = require('./src/routes/farmerRoutes');
const supplierRoutes = require('./src/routes/supplierRoutes');
const govoffRoutes = require('./src/routes/govoffRoutes');

app.use('/user', userRoutes);
app.use('/farmer', farmerRoutes);
app.use('/supplier', supplierRoutes);
app.use('/govoff', govoffRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message || 'Something went wrong!' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
