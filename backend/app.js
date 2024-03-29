const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const routes = require('./src/routes');

const app = express();
const port = 3000
app.use(express.json());

// conectando ao MongoDB
const username = process.env.MONGO_USER
const password = process.env.MONGO_PASS
const db_connection = process.env.MONGO_CONNECTION

// rotas
app.use('/teams', routes.team)

// iniciando o servidor
app.listen(port, () => {
    mongoose.connect(db_connection);
    console.log(`Backend rodando na porta: ${port}`)
})
