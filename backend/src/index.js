const express = require('express');
const routes = require('./routes'); // precisa do ./ pq sen vai achar que é pacote
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // define a porta da aplicação
