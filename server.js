const express = require('express');
const app = express();
const batikRoutes = require('./src/routes/batikRoute');
require('dotenv').config();

app.use(express.json());
app.use('/api', batikRoutes);

const PORT = process.env.PORT || 3000;
const HOSTNAME = '0.0.0.0';
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
});