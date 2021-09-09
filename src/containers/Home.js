import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import * as count from '../store/action/count'

const Home= (props) =>{
    return (
    <div>
        <Header/>
        <div>{props.count}</div>
        <button onClick={()=>props.INCREMENT(1)}>+1</button>
        <button onClick={()=>props.DECREMENT(1)}>-1</button>
    </div>)
}
 
const mapStateToProps = state => {
    return {
        count:state.counter.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        INCREMENT:(value)=>{dispatch(count.INCREMENT(value))},
        DECREMENT:(value)=>{dispatch(count.DECREMENT(value))}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home)
