import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { movies, error, isLoading, selectedMovie } from './reducers';

const rootReducer = combineReducers({
  movies,
  error,
  isLoading,
  selectedMovie,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));
