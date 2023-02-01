/* eslint-disable linebreak-style */
import React from 'react';
import Metrics from '../Components/Metrics';
import NewForYour from '../Components/NewForYour';
import Hero from './Hero';
import WhySifa from './WhySifa';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhySifa />
      {/* <ForYou /> */}
      <NewForYour />
      <Metrics />
    </div>
  );
}
