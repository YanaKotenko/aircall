import React from 'react';
import { useDispatch } from 'react-redux';

import LikeDislikeControl from '../LikeDislikeControl';

import { deleteMovie } from '../../store/actions';

import {
  Movie,
  MovieImageBox,
  MovieCategory,
  MovieDelete,
  MovieImageFader,
  MovieImage,
  MovieImageBottom,
  MovieTextBox,
  MovieTitle,
} from './card.module.scss';

const Card = (props) => {
  const dispatch = useDispatch();
  const { movie } = props;

  const onDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  }

  return (
    <div className={Movie}>
      <div className={MovieImageBox}>
        <div className={MovieCategory}>{movie.category}</div>
        <div className={MovieDelete} onClick={() => onDeleteMovie(movie.id)}></div>
        <div className={MovieImageFader}></div>
        <img className={MovieImage} src={movie.poster} alt="poster" />
        <div className={MovieImageBottom}>
          <LikeDislikeControl
            setStatus={movie.setLike}
            id={movie.id}
            action="like"
            count={movie.likes}
          />
          <LikeDislikeControl
            setStatus={movie.setDislike}
            id={movie.id}
            action="dislike"
            count={movie.dislikes}
          />
        </div> 
      </div>
      <div className={MovieTextBox}>
        <div className={MovieTitle}>{movie.title}</div>
      </div>
    </div>
  );
}

export default Card;
