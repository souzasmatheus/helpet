import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { movies, error, isLoading } from './reducers';

const rootReducer = combineReducers({
  movies,
  error,
  isLoading,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
