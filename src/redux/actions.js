import axios from 'axios';
import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './constants';

export function fetchingMovies(bool) {
  return {
    type: FETCHING_MOVIES,
    isLoading: bool,
  };
}

export function fetchingFailed(bool) {
  return {
    type: FETCH_MOVIES_ERROR,
    hasErrored: bool,
  };
}

export function fetchingSucceeded(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
  };
}

export function fetchMovies(url) {
  return dispatch => {
    dispatch(fetchingMovies(true));

    axios
      .get(url)
      .then(res => {
        dispatch(fetchingMovies(false));
        return res.data.results;
      })
      .then(movies => dispatch(fetchingSucceeded(movies)))
      .catch(err => dispatch(fetchingFailed(true)));
  };
}
