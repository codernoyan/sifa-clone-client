/* eslint-disable linebreak-style */
import React from 'react';
import Hero from './Hero';
import WhySifa from './WhySifa';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-2 md:px-0">
        <Hero />
      </div>
      <WhySifa />
    </div>
  );
}
