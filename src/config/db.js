const {Sequelize} = require('sequelize');
require('dotenv').config(); // Carga la informacion del .env

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false, // Cambia a true si deseas ver las consultas SQL en la consola
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize.authenticate()
  .then(() =>{
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err=>{
    console.error('Error al conectar a la base de datos:',err);
  })

module.exports = sequelize;


// const mysql = require('mysql2/promise');
// require('dotenv').config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// // Verificar la conexión al iniciar
// pool.getConnection()
//   .then(connection => {
//     console.log('Conexión a la base de datos establecida');
//     connection.release();
//   })
//   .catch(err => {
//     console.error('Error al conectar a la base de datos:', err);
//   });

// module.exports = pool;