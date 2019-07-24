import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/mainReducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

export default initialState => {
  const store = createStore(mainReducer, initialState, enhancer);
  return store;
};
