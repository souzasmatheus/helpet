import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_SELECTED_MOVIE,
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
export function movies(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
}

export function selectedMovie(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_MOVIE:
      return action.movie;
    default:
      return state;
  }
}
