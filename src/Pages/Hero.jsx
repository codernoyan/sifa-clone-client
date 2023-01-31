/* eslint-disable linebreak-style */
import React from 'react';

export default function Hero() {
  return (
    <div className="md:flex justify-between gap-16 pt-14 md:pt-20">
      <div className="text-center md:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-inter">
          Technology should
          {' '}
          <span className="block">strengthen human</span>
          {' '}
          relationships,
          <span className="text-navColor block">not replace them.</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          SIFA empowers financial advisors to authentically and intelligently engage with
          clients and prospects to build and grow relationships by streamlining their
          workflow, saving time and effort on creating bespoke meeting preparation,
          fact find summaries and prospecting.
        </p>
        <div className="flex">
          <input type="text" className="border border-gray-500" />
          <button type="submit" className="px-14">Join our free trial</button>
        </div>
      </div>
      <div>
        <iframe width={562} height={395} src="https://www.youtube.com/embed/XiQfbORNfU8" title="SIFA - World's first AI-powered GPT assistant for financial advisors" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
  );
}
