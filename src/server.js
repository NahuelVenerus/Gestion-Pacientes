const express =  require('express');
const cors =  require('cors');
const app = express();

app.use(cors());
app.get('/login', (req,res) => {
    res.json({token:"1111111"})
})
app.get('/historial', (req,res) => {

    res.json({token:"1111111"})
}) 
app.listen(3000);

