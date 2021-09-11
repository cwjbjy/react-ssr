import { renderToString } from "react-dom/server"; //引入renderToString方法
import { StaticRouter, Switch, Route, matchPath } from "react-router-dom";
import React from "react"; //引入React以支持JSX的语法
import routes from "../routes";
import { Provider } from "react-redux";
import {getStore} from "../store";

export default function (req, res) {
  const store = getStore();
  /* 收集匹配路由 */
  const matchRoutes = [];
  routes.some((route) => {
    matchPath(req.path, route) && matchRoutes.push(route);
  });
  /* 收集需要调用数据的方法 */
  const promises = [];
  matchRoutes.forEach((item) => {
    if (item.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  /* 调用完数据再加载页面 */
  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </StaticRouter>
      </Provider>
    );
    res.send(`
    <html>
        <head>
        <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
            </script>
            <script src="/index.js"></script>
        </body>
    </html>
`);
  });
}
