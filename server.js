const express =  require('express');
const app =  express();
const cors = require('cors');
const ConnectionDB = require('./models/db.js');
const db = new ConnectionDB()

app.use(cors());
app.use(express.json());

app.post('/add', async (req, res) => {
    const {Proprietario, Modelo, Placa, Funcionario, Vaga} = req.body;

    await db.create(Proprietario, Modelo, Placa, Funcionario, Vaga)
});

app.get('/', async (req, res) => {
  const read = await db.Read()
  res.json(read);
});

app.post('/update', async (req, res) => {
  const {id, nome, model, placa, funcionario, vaga} = req.body;
  await db.Update(id, nome, model, placa, funcionario, vaga);
  res.json(true);
});


app.post('/delete', async(req, res) => {
  const {id} = req.body;
  await db.Delete(id);
});


app.listen(8001, () => console.log('servidor rodando em http://localhost:8001'));