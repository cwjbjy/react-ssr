import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Home from '../containers/Home'

const app= express()

const content = renderToString(<Home/>)

app.use(express.static("public"));

app.get('/',(req,res) => res.send(`
<html>
<head>
  <title>ssr</title>
</head>
<body>
  <div id="root">${content}</div>
  <script src="/index.js"></script>
</body>
</html>
`))
 
app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))