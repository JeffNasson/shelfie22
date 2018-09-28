require('dotenv').config();
const bodyParser=require('body-parser');
const express = require('express');
const massive=require('massive');
const ctrl=require('./controller.js')

const app=express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance=>{
        app.set('db',dbInstance)
        console.log('db connected')
    })
    .catch(err=>console.log(err))


app.get('/api/inventory',ctrl.getInventory)
app.post('/api/products',ctrl.postProducts)
app.delete('/api/products/:id',ctrl.delete)
// app.update()

const port = 4000
app.listen(port,()=>{console.log(`Hard to port ${port} Captain.`)})