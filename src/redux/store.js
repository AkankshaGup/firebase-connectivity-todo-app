import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import taskReducer from '../reducer/taskreducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        taskReducer: taskReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
