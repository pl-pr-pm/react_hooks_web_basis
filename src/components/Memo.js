import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prev) => prev + 1);
  };

  const AddCount2 = () => {
    setCount2((prev) => prev + 1);
  };

  // count1の値が変化した場合のみ実行される
  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return count1 % 2 !== 0;
  }, [count1]);

  return (
    <div>
      <button onClick={AddCount1}>Count1: {count1}</button>
      <span>{isOdd ? '奇数' : '偶数'}</span>
      <button onClick={AddCount2}>Count2: {count2}</button>
    </div>
  );
};

export default Memo;
