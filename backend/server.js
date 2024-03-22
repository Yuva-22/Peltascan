const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"peltascan"
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});



app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error('Database error: ',err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (data.length > 0) {
            // User found, login successful
            return res.json({ message: "Login successful" });
        } else {
            // User not found or invalid credentials
            return res.status(401).json({ error: "Invalid username or password" });
        }
    });
});


app.listen(8081,()=>{
    console.log("Listening...");
})

