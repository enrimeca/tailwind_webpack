import React from 'react';
import Product from '../../elements/Product';

const ProductList = ({products}) => {
  return (
    <section className="mx-auto bg-yellow-100 dark:bg-gray-600 overflow-hidden max-w-7xl pb-12 px-4 lg:px-8">
      <h1 className="section-title mt-12">Productos</h1>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((e, index) => (
          <Product key={index} name={e.name} image={e.image} description={e.description} />
        ))}
      </article>
    </section>
  )
}

export default ProductList
