import React from 'react';

export const Row = ({ left, right }) => (
  <div className="row mb2">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
);
