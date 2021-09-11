import Home from './containers/Home'        //引入Home组件
import Login from './containers/Login'

export default [
    {
        path:"/",
        exact:true,
        component:Home,
        loadData:Home.loadData,//调用数据的方法
        key:'home'
    },
    {
        path:"/login",
        exact:true,
        component:Login,
        key:'login' 
    }
]