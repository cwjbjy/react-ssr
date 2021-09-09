import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import * as count from '../store/action/count'
import {GETUSER} from '../store/action/user'

const Home= (props) =>{
    let {users} = props;
    return (
    <div>
        <Header/>
        <div>{props.count}</div>
        <ul>
            {users && users.map(item=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
        <button onClick={()=>props.INCREMENT(1)}>+1</button>
        <button onClick={()=>props.DECREMENT(1)}>-1</button>
        <button onClick={()=>props.GETUSER()}>获取接收数据</button>
    </div>)
}
 
const mapStateToProps = state => {
    return {
        count:state.counter.count,
        users:state.user.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        INCREMENT:(value)=>{dispatch(count.INCREMENT(value))},
        DECREMENT:(value)=>{dispatch(count.DECREMENT(value))},
        GETUSER:(value)=>{dispatch(GETUSER(value))},
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home)
