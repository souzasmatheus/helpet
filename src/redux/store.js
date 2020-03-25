import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  movies,
  error,
  isLoading,
  selectedMovie,
  errorLoadingMore,
  isLoadingMore,
} from './reducers';

const rootReducer = combineReducers({
  movies,
  error,
  isLoading,
  selectedMovie,
  errorLoadingMore,
  isLoadingMore,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
