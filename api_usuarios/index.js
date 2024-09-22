const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tu_base_de_datos'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

app.get('/', (req, res) => {
    res.send('API de Usuarios - Funciona correctamente');
});

app.post('/api/usuarios/registro', (req, res) => {
    const usuario = req.body;
    db.query('INSERT INTO Usuarios SET ?', usuario, (err, result) => {
        if (err) throw err;
        res.status(201).send(`Usuario registrado con ID: ${result.insertId}`);
    });
});

app.post('/api/usuarios/login', (req, res) => {
    const { DNI, Contraseña } = req.body;
    db.query('SELECT * FROM Usuarios WHERE DNI = ? AND Contraseña = ?', [DNI, Contraseña], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    });
});

app.get('/api/usuarios/recuperar/:dni', (req, res) => {
    const dni = req.params.dni;
    const query = 'SELECT Contraseña FROM Usuarios WHERE DNI = ?';
    db.query(query, [dni], (err, results) => {
        if (err) {
            return res.status(500).send('Error en la consulta');
        }
        if (results.length === 0) {
            return res.status(404).send('Código de usuario no encontrado');
        }
        res.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
});
