import './item-details.css';

import { Children, cloneElement } from 'react';

import { ErrorButton } from '../error-button';

export const Record = ({ data, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{data[field]}</span>
  </li>
);

export const ItemDetails = ({ data, children }) => {
  const { imageUrl, name } = data;

  const itemList = Children.map(children, (child) => {
    return cloneElement(child, { data });
  });

  return (
    <div className="person-details card">
      <img className="person-image" src={imageUrl} alt={name} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">{itemList}</ul>
        <ErrorButton />
      </div>
    </div>
  );
};
