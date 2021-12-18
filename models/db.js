const Sequelize = require('sequelize');
const tableUsuarios = require('./models.js');

class ConnectionDB
{
  constructor()
  {
    this.db = new Sequelize(
      'estacionamento',
      'root2',
      '1234',
      {
        host: 'localhost',
        dialect: 'mysql'
      }
    )
  }

  async modelTable(db)
  {
    const Table = db.define(tableUsuarios.nome, tableUsuarios.table, tableUsuarios.options)
    return Table;
    // return await Table.sync({force: true}) /*forçar a criação da tabela */
  }

  async create(dado1, dado2, dado3, dado4, dado5){
    const Table = await this.modelTable(this.db);
    await Table.create(
      {
        Proprietario: dado1,
        Modelo: dado2, 
        Placa: dado3, 
        Funcionario: dado4, 
        Vaga: dado5
      }
    );
    return true
  }

  async Read(){
    const Table = await this.modelTable(this.db);
    const [...rows] = await Table.findAll();
    return rows;
  }

  async Update(id, dado1, dado2, dado3, dado4, dado5){
    const Table = await this.modelTable(this.db);
    const up = await Table.findByPk(id);
    up.Proprietario = dado1;
    up.Modelo = dado2; 
    up.Placa = dado3; 
    up.Funcionario = dado4; 
    up.Vaga = dado5;    
    up.save();

    return true;
  }

  async Delete(id){
    const Table = await this.modelTable(this.db);
    const Delete = await Table.findByPk(id);
    Delete.destroy();
  }
 
}

module.exports = ConnectionDB;