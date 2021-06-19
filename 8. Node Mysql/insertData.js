console.clear();
const mysql = require('mysql');

//XAMP diye Apeache, MySql start thaka lagbe
//configDatabase object ta same as bellow thaka lagbe for local machine


const configDatabase = {
    host: "localhost",
    user: "root", 
    password: "",
    database: "nodejspractice"
}

const con = mysql.createConnection(configDatabase);

con.connect((error)=>{
    if(error){throw error}
    else {
        console.log("Connection OK");
        let Query = `INSERT INTO customers(
            name,
            id,
            address ,
            status)
        VALUES(
            'Jahid Hasan',
            '17104056',
            'Apple',
            'Software Engineer');`
        con.query(Query, (e)=>{
            if(e) throw e;
            else console.log("inserted");

        });
    }
});
