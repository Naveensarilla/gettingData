const expreess = require('express');

const mysql = require('mysql');

const cors = require('cors');

const app = expreess()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'naveen',
    password: 'naveen',
    database: 'APIstudentList'
})




app.get('/', (re,res) => {
    return res.json('From Backend Side ');
})



app.get('/studentData', (req, res) => {
    const sql = "SELECT * FROM studentData";
    // const sql = "SELECT * FROM data where  RegisterNo=1245";
    //  const sql = "SELECT * FROM studentData where Coures='10th'";

    // const sql = 'select * from data';
    db.query(sql, (err, studentData) => {
        if(err) return res.json(err);
        return res.json(studentData);
    })
})

app.get('/studentData9th', (req, ress) => {
    const sql = "SELECT * FROM studentData9th";
    // const sql = "SELECT * FROM studentData where  Coures='9th'";

    // const sql = 'select * from data';
    db.query(sql, (errr, studentData) => {
        if(errr) return ress.json(errr);
        return ress.json(studentData);
    })
})



app.get('/studentData8th', (req, ress3) => {
    const sql = "SELECT * FROM studentData8th";
    // const sql = "SELECT * FROM studentData where  Coures='9th'";

    // const sql = 'select * from data';
    db.query(sql, (errr3, studentData) => {
        if(errr3) return ress3.json(errr3);
        return ress3.json(studentData);
    })
})


app.get('/studentData7th', (req, ress3) => {
    const sql = "SELECT * FROM studentData7th";
    // const sql = "SELECT * FROM studentData where  Coures='9th'";

    // const sql = 'select * from data';
    db.query(sql, (errr3, studentData) => {
        if(errr3) return ress3.json(errr3);
        return ress3.json(studentData);
    })
})

app.get('/studentData6th', (req, ress3) => {
    const sql = "SELECT * FROM studentData6th";
    // const sql = "SELECT * FROM studentData where  Coures='9th'";

    // const sql = 'select * from data';
    db.query(sql, (errr3, studentData) => {
        if(errr3) return ress3.json(errr3);
        return ress3.json(studentData);
    })
})


// ----------------------------------------------------------------------------------------
app.get('/studentData', (req, resa) => {
    // const sql = "SELECT * FROM studentData";
    const sql = "SELECT * FROM data where  RegisterNo";
    //  const sql = "SELECT * FROM studentData where Coures='10th'";

    // const sql = 'select * from data';
    db.query(sql, (erra, studentData) => {
        if(erra) return resa.json(erra);
        return resa.json(studentData);
    })
})
// ----------------------------------------------------------------

app.listen(5041, ()=> {
    console.log('Listening');
})
