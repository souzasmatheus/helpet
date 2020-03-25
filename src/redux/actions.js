import axios from 'axios';
import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCHING_MORE_MOVIES,
  FETCH_MORE_MOVIES_SUCCESS,
  FETCH_MORE_MOVIES_ERROR,
  SET_TOTAL_PAGES
} from './constants';

export function setTotalPages(num) {
  return {
    type: SET_TOTAL_PAGES,
    totalPages: num,
  };
}

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
        dispatch(fetchingSucceeded(res.data.results));
        dispatch(setTotalPages(res.data.results));
      })
      .catch(err => {
        dispatch(fetchingMovies(false));
        dispatch(fetchingFailed(true));
      });
  };
}

// FETCHING MORE

export function fetchingMoreMovies(bool) {
  return {
    type: FETCHING_MORE_MOVIES,
    isLoading: bool,
  };
}

export function fetchingMoreFailed(bool) {
  return {
    type: FETCH_MORE_MOVIES_ERROR,
    hasErrored: bool,
  };
}

export function fetchingMoreSucceeded(movies) {
  return {
    type: FETCH_MORE_MOVIES_SUCCESS,
    movies,
  };
}

export function fetchMoreMovies(url) {
  return dispatch => {
    dispatch(fetchingMoreMovies(true));

    axios
      .get(url)
      .then(res => {
        dispatch(fetchingMoreMovies(false));
        return res.data.results;
      })
      .then(movies => dispatch(fetchingMoreSucceeded(movies)))
      .catch(err => {
        dispatch(fetchingMoreMovies(false));
        dispatch(fetchingMoreFailed(true));
      });
  };
}
