const express =  require('express');
const cors =  require('cors');
const app = express();

app.use(cors());

const historial = [
    {
        id:"1",
        dia:"07/11/2021",
        descripcion:"Esto es un ejemplo"
    },
    {
        id:"2",
        dia:"06/11/2021",
        descripcion:"Esto es un ejemplo"
    },
    {
        id:"3",
        dia:"05/11/2021",
        descripcion:"Esto es un ejemplo"
    },
  ];

app.get('/login', (req,res) => {
    res.json({token:"1111111"})
})
app.get('/historial', (req,res) => {
    // throw new Exception("esto es un error");
    res.json(historial)
}) 
app.listen(3000);

