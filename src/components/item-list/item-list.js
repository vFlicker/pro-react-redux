import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const itemList = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={onItemSelected.bind(null, id)}>
        { label }
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {itemList}
    </ul>
  );
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
