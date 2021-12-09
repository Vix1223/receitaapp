const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const users = require('./models/user.model');

mongoose.connect('mongodb://localhost:27017/Cookmaster', {
    //opçôes
}).then(() => {
    console.log('Conectado ao banco de dados com sucesso')
}).catch((err) => {
    console.log('err')
})

app.get('/', (req, res) => {
    return res.status(200).json({
        mensagem: 'rota do tipo GET com endereco /',
        data:'08/12/2021',

    })
})

app.post('/novoUsuario', (req, res) => {
    const {nome, email, password, role} = req.body;
    console.log(nome, email, password, role )

    return res.status(201).json({
        mensagem: 'usuario cadastrado com sucesso'
    })
})
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})