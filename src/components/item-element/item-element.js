import React, { Fragment } from "react";

import { ErrorButton } from "../error-button";

import './item-element.css';

export const ItemElement = ({ name, imageUrl, itemList }) => (
  <Fragment>
    <img
      className="person-image"
      src={imageUrl}
      alt={name}
    />
    <div className="card-body">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {itemList}
      </ul>
      <ErrorButton />
    </div>
  </Fragment>
);
