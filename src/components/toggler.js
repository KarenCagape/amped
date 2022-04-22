import * as React from 'react';

export function Toggler({ children }) {
  const [enabled, setEnabled] = React.useState(false);

  function toggle() {
    setEnabled(!enabled);
  }

  return <>{children({ toggle, enabled })}</>;
}

export default Toggler;
