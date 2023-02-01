/* eslint-disable linebreak-style */
import React from 'react';

export default function Hero() {
  return (
    <div className="container mx-auto px-2 md:px-0">
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
          {/* subscription email */}
          <form>
            <div className="flex flex-col md:flex-row gap-4 mt-12 mb-16">
              <input type="text" className="border border-gray-500 rounded-md px-4 w-full py-3 md:w-1/2" placeholder="Enter your email" />
              <button type="submit" className="px-10 py-3 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md font-inter font-medium">Join our free trial</button>
            </div>
          </form>
        </div>
        <div>
          <iframe width={562} height={395} src="https://www.youtube.com/embed/XiQfbORNfU8" title="SIFA - World's first AI-powered GPT assistant for financial advisors" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  );
}
