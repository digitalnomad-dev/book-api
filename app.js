const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Book API');
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
});
