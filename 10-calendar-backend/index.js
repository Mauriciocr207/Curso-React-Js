require('dotenv').config();
const { authRouter } = require('./app/routes');
const cors = require('cors');
const express = require('express');
const DBConnection = require('./app/database/config');
const eventRouter = require('./app/routes/eventRouter');

const app = express();
const port = 4000;
DBConnection();

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
}) 

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);

