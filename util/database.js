require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        dialect: 'mysql',
        host: process.env.DB_HOST
    }
);

module.exports = sequelize;


// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASS
// });

// module.exports = pool.promise();