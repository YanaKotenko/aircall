import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getMovies,
  getCategories,
  filterMovies,
} from './store/actions';

import Card from './components/Card';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

import style from './style.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const {
    moviesList, categories, filteredMovies, perPageSelected,
  } = useSelector((store) => store.movies);
  const firstPage = 1;
  const [pageNumber, setPageNumber] = useState(firstPage);
  const [cardsPerPage, setCardsPerPage] = useState([]);
  const cardList = filteredMovies.length === 0 ? moviesList : filteredMovies;
  const paginationIsVisible = cardList.length > perPageSelected;

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    dispatch(getCategories(moviesList));
  }, [moviesList]);

  useEffect(() => {
    const checkedCategories = categories.filter((cat) => cat.checked).map((cat) => cat.title);
    dispatch(filterMovies(checkedCategories));
    setPageNumber(firstPage);
  }, [categories]);

  useEffect(() => {
    const array = [];
    const firstIndexPerPage = (pageNumber - 1) * perPageSelected;
    for(var i = firstIndexPerPage; i < (pageNumber * perPageSelected) && i < cardList.length; i++) {
      array.push(cardList[i])
    }
    setCardsPerPage(array);
  }, [cardList, pageNumber, perPageSelected]);

  const onClickPaginator = (action) => {
    const maxPagesNumber = Math.ceil(cardList.length / perPageSelected);

    if (action === 'prev' && pageNumber !== firstPage) {
      setPageNumber(pageNumber - 1);
    }

    if (action === 'next' && pageNumber !== maxPagesNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className={style.Wrapper}>
      <div className={style.Content}>
        <Filter categories={categories} />
        <div className={style.Movies}>
          {cardsPerPage.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        {paginationIsVisible && <Pagination onClick={(action) => onClickPaginator(action)} />}
      </div>
    </div>
  );
}

export default App;
