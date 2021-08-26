import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { evoluateMovie } from '../../store/actions';

import {
  MovieLikesBox,
  MovieLikeIcon,
  CheckedIcon,
  MovieCounter,
  RotateIcon,
} from './likeDislike.module.scss';

const LikeDislikeControl = (props) => {
  const dispatch = useDispatch();
  const { setStatus, id, action, count } = props;

  const onEvoluateMovie = (id, action) => {
    dispatch(evoluateMovie(id, action));
  }

  const Icon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet" focusable="false">
      <g>
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
      </g>
    </svg>
  )

  return (
    <div className={MovieLikesBox}>
      <div
        className={
          classNames(
            MovieLikeIcon,
            setStatus ? CheckedIcon : '',
            action === 'dislike' ? RotateIcon : '',
          )
        }
        onClick={() => onEvoluateMovie(id, action)}
      >
        <Icon />
      </div>
      <div className={classNames(MovieCounter, setStatus ? CheckedIcon : '')}>
        {count.toLocaleString()}
      </div>
    </div>
  );
}

export default LikeDislikeControl;
