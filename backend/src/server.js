const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ojt4i.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);
app.listen(3333);



// Get Post Put Delete
// Sequelize para SQL
// Get busca informação
// Post manda informação
// Put edita informação
// Delete deleta informação
// req.query = acessar query params (filtros)
// req.params = acessar route params (Para edição, delete)
// req.body = acessar corpo da requisição (Insert, Edição)
//  app.use(express.json()); Permite utilização de Json no Post
/*
app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

app.get('/users/id', (req, res) => {
    return res.json({ idade: req.query.idade });
});
*/