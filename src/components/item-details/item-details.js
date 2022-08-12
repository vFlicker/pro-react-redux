import React, { Children, useCallback, cloneElement } from 'react';

import { useData } from '../../hooks';
import { Spinner } from '../spinner';
import { ItemElement } from '../item-element';

import './item-details.css';

export const Record = ({ data, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{data[field]}</span>
  </li>
);

export const ItemDetails = ({ itemId, getData, children }) => {
  const getDataById = useCallback(() => getData(itemId), [getData, itemId]);

  const { data, loading, error } = useData(getDataById);

  if (!data) return <span>Select an item from the list</span>;

  if (error) return <span>Error</span>;

  const itemList = Children.map(children, (child) => {
    return cloneElement(child, { data });
  })

  const spinner = loading && <Spinner />;
  const itemElement = !loading && (
    <ItemElement name={data.name} image={data.imageUrl} itemList={itemList} />
  );

  return (
    <div className="person-details card">
      {spinner}
      {itemElement}
    </div>
  );
}
