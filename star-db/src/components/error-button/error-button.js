import React, { useState } from 'react';

import './error-button.css';

export const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);

  if (renderError) this.foo.bar = 0;

  return (
    <button
      className="btn error-button btn-danger btn-lg"
      onClick={() => setRenderError(true)}>
      Throw Error
    </button>
  );
}
