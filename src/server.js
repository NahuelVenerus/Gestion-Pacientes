const express =  require('express');
const app = express();


app.get('/login', (req,res) => {
    res.json({token:"1111111"})
}) 
app.listen(3000);