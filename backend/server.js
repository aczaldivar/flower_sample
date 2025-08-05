const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const Contact = require('./models/Contact');

const app = express();


app.use(cors({
    origin: 'http://localhost:3000/RequestCustomer', // Adjust this to your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json());

app.post('/RequestCustomer', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = await Contact.create({ name, email, phone, message });
    res.json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
