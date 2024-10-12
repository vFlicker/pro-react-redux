import React from 'react';

import './item-list.css';

export const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
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
