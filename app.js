const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('gabung');    
})
app.listen(port,()=>{
    console.log('example app listening at http://localhost:3000');
});
