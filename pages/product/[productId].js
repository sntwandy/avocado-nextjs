import React from 'react';
import { useRouter } from 'next/router'

const ProductItem = () => {
  const { query: { productId } } = useRouter();
  return(
    <div>
      This is the product site: { productId }
    </div>
  );
};

export default ProductItem;