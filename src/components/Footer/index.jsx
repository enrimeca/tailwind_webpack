import React from 'react';
import Facebook from '@images/facebook.png'
import Instagram from '@images/instagram.png'
import Twitter from '@images/twitter.png'

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 pt-8 pb-16 sm:py-12 text-center mt-8">
      <section className="mt-4">
        <h1 className="font-bold text-base">APIREYNA EIRL</h1>
      </section>
      <section className="mt-4">
        <address className="font-bold text-base">Dirección: Jr. Larco 456 - Chiclayo</address>
      </section>
      <section className="flex justify-center mt-4 sm:col-span-2 lg:col-span-1">
        <figure className="pr-4">
          <img className="h-8" src={Facebook} alt="Facebook" />
        </figure>
        <figure className="pr-4">
          <img className="h-8" src={Instagram} alt="Instagram" />
        </figure>
        <figure className="pr-4">
          <img className="h-8" src={Twitter} alt="Twitter" />
        </figure>
      </section>
    </footer>
  )
}

export default Footer