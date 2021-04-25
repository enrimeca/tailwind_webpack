import React from 'react';
import Bees from '../../assets/images/bees.jpg';

const Hero = ({title, company, resume}) => {
  return (
    <section className="md:flex mx-auto overflow-hidden max-w-7xl">
      <figure className="md:flex-shrink-0 my-auto">
        <img className="h-96 w-full object-cover md:w-80" src={Bees} alt="Bees" />
      </figure>
      <article className="p-8">
        <h1 className="section-title text-left">{title}</h1>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-300">{company}</h2>
        <p className="mt-2 text-gray-900 dark:text-gray-200 text-justify">{resume}</p>
      </article>
    </section>
  )
}

export default Hero
