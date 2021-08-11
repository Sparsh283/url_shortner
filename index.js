const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(express.json({ extended: true}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
const PORT = 9000;
app.listen(PORT, () => console.log('Listening on port 9000 '));