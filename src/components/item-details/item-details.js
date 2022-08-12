import React, { Children, useEffect, useState, cloneElement } from 'react';

import { Spinner } from '../spinner';
import { ItemElement } from '../item-element';

import './item-details.css';

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export const ItemDetails = ({ itemId, getData, children }) => {
  const [stateData, setStateData] = useState({
    item: null,
    loaded: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    setStateData((prevState) => ({...prevState, loaded: false}));

    if (!itemId) return;

    getData(itemId)
      .then((item) => !cancelled && setStateData({
        item,
        loaded: false,
        error: null,
      }))
      .catch(() => !cancelled && setStateData({
        item: null,
        loaded: true,
        error: true,
      }));

    return () => {
      cancelled = true;
    };
  }, [itemId, getData]);

  const { item, loaded, error } = stateData;

  if (!item) return <span>Select an item from the list</span>;

  if (error) return <span>Error</span>;

  const itemList = Children.map(children, (child) => {
    return cloneElement(child, { item });
  })

  const spinner = loaded && <Spinner />;
  const itemElement = !loaded && (
    <ItemElement name={item.name} image={item.imageUrl} itemList={itemList} />
  );

  return (
    <div className="person-details card">
      {spinner}
      {itemElement}
    </div>
  );
}
