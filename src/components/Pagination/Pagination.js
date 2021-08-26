import React from 'react';

import {
  PaginationBox,
  PaginationArrowBox,
  PaginationArrowPrev,
  PaginationArrowNext,
} from './pagination.module.scss';

const Pagination = (props) => {
  const { onClick } = props;

  return (
    <div className={PaginationBox}>
      <div
        className={PaginationArrowBox}
        onClick={() => onClick('prev')}
      >
        <div className={PaginationArrowPrev}></div>
      </div>
      <div
        className={PaginationArrowBox}
        onClick={() => onClick('next')}
      >
        <div className={PaginationArrowNext}></div>
      </div>
    </div>
  );
}

export default Pagination;
