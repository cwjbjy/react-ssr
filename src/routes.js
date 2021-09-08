import React from 'react'                   //引入React以支持JSX
import { Route ,Switch} from 'react-router-dom'    //引入路由
import Home from './containers/Home'        //引入Home组件
import Login from './containers/Login'
export default (
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
    </Switch>
)