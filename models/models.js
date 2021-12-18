const { DataTypes } = require('sequelize');

const tableUsuarios = {
  nome: "Usuarios",

  table: {
    Proprietario: { 
      type: DataTypes.STRING
    },
    Modelo: {
      type: DataTypes.STRING
    },
    Placa:{
      type: DataTypes.STRING
    },
    Funcionario: {
      type: DataTypes.STRING
    },
    Vaga:{
      type: DataTypes.INTEGER
    }
  },
  options: { freezeTableName: true }
}

module.exports = tableUsuarios;