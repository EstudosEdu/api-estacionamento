const express =  require('express');
const app =  express();
const cors = require('cors');
const ConnectionsDB = require('./models/db.js')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Seja bem vindo a nossa API de estacionamento!')
});

app.listen(8001, () => console.log('servidor rodando em http://localhost:8001'));