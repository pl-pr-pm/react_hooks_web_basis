import React, { useState } from 'react';

const Basic1 = () => {
  const [product, setProduct] = useState({ name: '', price: '' });

  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ name: e.target.value })} // nameだけ書き換える(priceは書き換えない)
        />

        <input
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ price: e.target.value })}
        />
      </form>
      <h1>{`Product name is ${product.name}`}</h1>
      <h1>{`Product price is ${product.price}`}</h1>
    </>
  );
};
export default Basic1;
