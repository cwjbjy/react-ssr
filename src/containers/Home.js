import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as count from "../store/action/count";
import { getUsers } from "../store/action/user";

const Home = (props) => {
  let { users } = props;
  useEffect(() => {
    if (!users.length) {
      props.GETUSER();
    }
  }, []);
  return (
    <div>
      <Header />
      <div>{props.count}</div>
      <ul>
        {users &&
          users.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
      <button onClick={() => props.INCREMENT(1)}>+1</button>
      <button onClick={() => props.DECREMENT(1)}>-1</button>
    </div>
  );
};

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
