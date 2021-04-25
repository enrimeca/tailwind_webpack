import React from 'react';
import Hero from '../../elements/Hero';
import ProductList from '../../components/ProductList';
import Contact from '../../components/Contact';
import organization from '../../data/organization.json';
import data from '../../data/products.json'

const Main = () => {
  return (
    <main className="dark:bg-gray-900">
      <Hero title={organization.title} company={organization.company} resume={organization.resume}/>
      <ProductList products={data.products}/>
      <Contact />
    </main>
  )
}

export default Main