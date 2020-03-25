import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCHING_MORE_MOVIES,
  FETCH_MORE_MOVIES_SUCCESS,
  FETCH_MORE_MOVIES_ERROR,
  SET_TOTAL_PAGES,
} from './constants';

export function isLoading(state = false, action) {
  switch (action.type) {
    case FETCHING_MOVIES:
      return action.isLoading;
    default:
      return state;
  }
}

export function error(state = false, action) {
  switch (action.type) {
    case FETCH_MOVIES_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function isLoadingMore(state = false, action) {
  switch (action.type) {
    case FETCHING_MORE_MOVIES:
      return action.isLoading;
    default:
      return state;
  }
}

export function errorLoadingMore(state = false, action) {
  switch (action.type) {
    case FETCH_MORE_MOVIES_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.movies;
    case FETCH_MORE_MOVIES_SUCCESS:
      return [...state, ...action.movies];
    default:
      return state;
  }
}

export function totalPages(state = 1, action) {
  switch (action.type) {
    case SET_TOTAL_PAGES:
      return action.totalPages;
    default:
      return state;
  }
}
