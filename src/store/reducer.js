import {
  GET_MOVIES,
  DELETE_MOVIE,
  SET_FILTERS_CATEGORIES,
	TOGGLE_CATEGORY_STATE,
	EVOLUATE_MOVIE,
  FILTER_MOVIES,
  SET_AMOUNT_SELECTED,
} from './const';

const initState = {
  moviesList: [],
	categories: [],
	filteredMovies: [],
  perPageNumbers: [3, 6, 9],
  perPageSelected: 6,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesList: action.moviesList,
      };

    case SET_FILTERS_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      };
		}

    case DELETE_MOVIE: {
			const copyState = [...state.moviesList];
			const filtered = copyState.filter((movie) => movie.id !== action.id);
        
      return {
        ...state,
        moviesList: filtered,
      };
    }

    case TOGGLE_CATEGORY_STATE: {
			const copyStateCategories = [...state.categories];
			const selectedCategory = copyStateCategories.find((cat) => cat.id === action.id);
			if (selectedCategory.checked) {
				selectedCategory.checked = false;
			} else {
				selectedCategory.checked = true;
			}
        
      return {
        ...state,
        categories: copyStateCategories,
      };
    }

    case EVOLUATE_MOVIE: {
			const copyState = [...state.moviesList];
			const movie = copyState.find((movie) => movie.id === action.id);
		
			if (action.action === 'like') {
				movie.likes = movie.setLike ? movie.likes -= 1 : movie.likes += 1;
				movie.dislikes = movie.setDislike ? movie.dislikes -= 1 : movie.dislikes;
    		movie.setLike = movie.setLike ? false : true;
				movie.setDislike = false;
			} else if (action.action === 'dislike') {
				movie.dislikes = movie.setDislike ? movie.dislikes -= 1 : movie.dislikes += 1;
				movie.likes = movie.setLike ? movie.likes -= 1 : movie.likes;
				movie.setDislike = movie.setDislike ? false : true;
				movie.setLike = false;
			}
        
      return {
        ...state,
        moviesList: copyState,
      };
    }

    case FILTER_MOVIES: {
      let filteredMovies;

      if (action.checkedCategories.length > 0) {
        filteredMovies = state.moviesList.reduce((acc, cur) => {
          action.checkedCategories.forEach((category) => {
            if (cur.category === category) {
              acc.push(cur)
            } 
          })
          return acc;
        }, []);
      } else {
        filteredMovies = [];
      }
        
      return {
        ...state,
        filteredMovies: filteredMovies,
      };
    }

    case SET_AMOUNT_SELECTED: {
      return {
        ...state,
        perPageSelected: action.amount,
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
