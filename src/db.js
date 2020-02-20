const sequelize = require('sequelize')

const conn = new sequelize('banco', 'root', 'Valdisnei123', {
    host: 'localhost',
    dialect: 'mysql'
})
