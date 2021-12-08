const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.status(200).jason({
        mensagem: 'rota do tipo GET com endereco /'
    })
})
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})