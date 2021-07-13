const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const mainRouters = require('./routers/main');
const aboutRouters = require('./routers/main')

app.use('/', mainRouters);
app.use('/about', aboutRouters);


app.listen(port, () => {
    console.log('Servidor funcionando en ' + port);
})