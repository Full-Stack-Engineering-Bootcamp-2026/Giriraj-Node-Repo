// const mysql=require('mysql2');
// const pool=mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     database:'nodecomplete',
//     password:'your_password'

// })
// module.exports=pool.promise();

const Sequelize = require('sequelize');
const a = new Sequelize('nodecomplete', 'root', 'your_password', {
  dialect: 'mysql',
  host: '127.0.0.1',
});

module.exports=a;
