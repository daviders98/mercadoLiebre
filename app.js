const express = require('express');
const app = express();
const path= require('path');

app.listen(3010, () => {
    console.log('Servidor corriendo correctamente en el puerto 3010');
});

app.use(express.static(path.resolve(__dirname, './public')))

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})