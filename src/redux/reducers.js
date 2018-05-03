import {combineReducers} from 'redux';

import login from './login/reducer/index';
import signUp from './signUp/reducer/index';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    login: login,
    signUp: signUp,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
