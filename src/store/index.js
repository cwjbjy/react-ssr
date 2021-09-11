import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

/* 服务端的store创建函数 */
export const getStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

/* 客户端的store创建函数 */
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(rootReducer, defaultState, applyMiddleware(thunk));
};
