import React from 'react'
import Header from './Header'
const Home = () => {
  return (
    <div>
        <Header/>
      <div>This is ssr</div>
      <button onClick={() => {alert('666')}}>click</button>
    </div>
  )
}
export default Home
