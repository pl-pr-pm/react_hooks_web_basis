import React, { useState } from 'react';

const Basic1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // {} でかこうことで二つ以上の処理が記述できる
          // setCount((prevcount) => prevcount + 1);
          // setCount((prevcount) => prevcount + 1);
          setCount((prevcount) => prevcount + 1);
        }}
      >
        Click
      </button>
      <h1>{`Counter is ${count}`}</h1>
    </div>
  );
};
export default Basic1;
