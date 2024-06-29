const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    console.log('update in app.js!')
    res.send('server!!!!')
})

app.listen(1111,()=>console.log('server started'))