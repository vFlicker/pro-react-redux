import React, { Children, cloneElement } from 'react';

import { ItemElement } from '../item-element';

import './item-details.css';

export const Record = ({ data, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{data[field]}</span>
  </li>
);

export const ItemDetails = ({ data, children }) => {
  const itemList = Children.map(children, (child) => {
    return cloneElement(child, { data }) ;
  });

  return (
    <div className="person-details card">
      <ItemElement
        name={data.name}
        imageUrl={data.imageUrl}
        itemList={itemList}
      />
    </div>
  );
}
