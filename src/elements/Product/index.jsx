import React from 'react'

const Product = ({name, image, description}) => {
  return (
    <section className="max-w-xs rounded-lg overflow-hidden shadow-lg my-4 mx-auto bg-white">
      <img className="h-72 w-full" src={image} alt={name} />
      <article className="px-6 py-4">
        <p className="text-lg text-black font-semibold">{name}</p>
        <p className="text-gray-500 font-medium">{description}</p>
      </article>
    </section>
  )
}

export default Product
