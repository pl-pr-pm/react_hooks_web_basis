import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const C = () => {
  const val = useContext(AppContext);

  return (
    <div>
      <h3>C</h3>
      {val}
    </div>
  );
};

export default C;
