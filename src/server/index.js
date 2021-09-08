import express from 'express'
import render from './render';

const app= express()

app.use(express.static("public"));

app.get('*',(req,res) => {
    render(req, res);
})
 
app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))