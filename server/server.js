//hay que hacer la configuración inicial de express
//esta se la podes pedir al chad

const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

const rutaDist = path.resolve(__dirname,'../dist')
app.use(express.static(path.join(rutaDist)))

// Ruta básica
app.use( (req, res) => {
    res.sendFile(path.resolve(rutaDist,'index.html'));
});



// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
