const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());//em produção manda o origin que eh qual endereço pode acessar a aplicação
app.use(express.json());
app.use(routes);
app.listen(3333, "0.0.0.0");

