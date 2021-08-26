import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { toggleCategoryState, setAmountSelected } from '../../store/actions';

import {
  FilterBox,
  CategoriesFilter,
  Category,
  Active,
  PerPageBox,
  PerPage,
} from './filter.module.scss';

const Filter = (props) => {
  const dispatch = useDispatch();
  const { categories } = props;
  const { perPageNumbers, perPageSelected } = useSelector((store) => store.movies);

  const onToggleChecked = (id) => {
    dispatch(toggleCategoryState(id));
  }

  const onClickAmount = (amount) => {
    dispatch(setAmountSelected(amount));
  }

  return (
    <div className={FilterBox}>
      <div className={CategoriesFilter}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={classNames(Category, category.checked ? Active : '')}
            onClick={() => onToggleChecked(category.id)}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className={PerPageBox}>
        {perPageNumbers.map((amount) => (
          <div
            key={amount}
            className={classNames(PerPage, perPageSelected === amount ? Active : '')}
            onClick={() => onClickAmount(amount)}
          >
            {amount}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
