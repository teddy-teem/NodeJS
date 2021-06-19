console.clear();
const mysql = require('mysql');

const dbConfig={
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejspractice"
};
const con = mysql.createConnection(dbConfig);

con.connect((e)=>{
    if(e) throw e;
    else{
        let q = `SELECT * FROM customers;`

        con.query(q, (e, result, fields)=>{
            if(e) throw e;
            else{
                console.log(fields)
                console.log(result)
            }
        })
    }
});