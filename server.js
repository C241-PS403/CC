const express = require('express');
const app = express();
const batikRoutes = require('./src/routes/batikRoute');
require('dotenv').config();

app.use(express.json());
app.use('/api', batikRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});