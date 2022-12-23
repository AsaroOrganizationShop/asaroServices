//const mysql = require('mysql');

const mysql = require('mysql2')
// var con = mysql.createConnection({
//     host:"",
//     user: "",
//     password: "",
//     database: ""
// });

// const conectar = () =>{
//     con.connect(err => {
//         if (err) throw err
//         console.log("Db connected");


//     })
// }

require('dotenv').config()
const connection = mysql.createConnection(process.env.DATABASE_URL)

const conectar = () =>{
    connection.connect(err => {
        if(err) throw err
        console.log('Connected to PlanetScale!')
        connection.end()

    })
}


module.exports = {
    conectar
}