import './error-button.css';

import { useState } from 'react';

export function ErrorButton() {
  const [renderError, setRenderError] = useState(false);

  if (renderError) this.foo.bar = 0;

  return (
    <button
      className="btn error-button btn-danger btn-lg"
      onClick={() => setRenderError(true)}
    >
      Throw Error
    </button>
  );
}
