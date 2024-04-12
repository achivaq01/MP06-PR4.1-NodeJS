const app = require('./app');

// Inicialitza el servidor, que estarà escoltant en el port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Cognom Chica, Inicials A.C.V.\nEscoltant en el port ${port}...`));
