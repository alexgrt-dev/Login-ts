import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;
const SECRET_KEY = '12345';

app.use(cors());
app.use(bodyParser.json());

//User hardcoded
const user = { username: 'admin', password: '1234'};

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const token  = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });

    }

    return res.status(401).json({ error: 'Credenciales Inválidas' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});