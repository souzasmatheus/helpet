import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  movies,
  error,
  isLoading,
  errorLoadingMore,
  isLoadingMore,
} from './reducers';

const rootReducer = combineReducers({
  movies,
  error,
  isLoading,
  errorLoadingMore,
  isLoadingMore,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
