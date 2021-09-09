import { renderToString } from 'react-dom/server'//引入renderToString方法
import { StaticRouter } from 'react-router-dom'
import React from 'react'//引入React以支持JSX的语法
import Router from '../routes'
import { Provider } from 'react-redux'
import getStore from '../store'
export default function (req,res){
    const store = getStore()
    const content = renderToString((
        <Provider store={store}>
           <StaticRouter location={req.path} context={{}}>
               {Router}
           </StaticRouter>
        </Provider>
      ))
      res.send(`
    <html>
        <head>
        <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/index.js"></script>
        </body>
    </html>
`)
}