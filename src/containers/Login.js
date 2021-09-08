import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
        <Header/>
      <div>登录页</div>
      <button onClick={() => {alert('登录')}}>click</button>
    </div>
  )
}
export default Login
