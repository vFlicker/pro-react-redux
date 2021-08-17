import React from 'react';
import './item-list.css';

const ItemList = ({ data, renderItem, onItemSelected }) => {
  const itemList = data.map((item) => {
    const { id } = item;
    const label = renderItem(item);

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
}

export default ItemList;
