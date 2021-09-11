import React, { useEffect, useLayoutEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as count from "../store/action/count";
import { getUsers } from "../store/action/user";
import styles from './style.css';

class Home extends React.Component{
  componentWillMount() {
    //判断是否为服务端渲染环境
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }
  
  componentDidMount(){
    if (!this.props.users.length) {
      this.props.GETUSER();
    }
  }
  render(){
    let { count,users} = this.props
    return (
      <div>
        <Header />
        <div>{count}</div>
        <ul>
          {users &&
            users.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
        <button onClick={() => this.props.INCREMENT(1)}>+1</button>
        <button onClick={() => this.props.DECREMENT(1)}>-1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    users: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    INCREMENT: (value) => {
      dispatch(count.INCREMENT(value));
    },
    DECREMENT: (value) => {
      dispatch(count.DECREMENT(value));
    },
    GETUSER: () => {
      dispatch(getUsers());
    },
  };
};

Home.loadData = function (store) {
  return store.dispatch(getUsers());
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
