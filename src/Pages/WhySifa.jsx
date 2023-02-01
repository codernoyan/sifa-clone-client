/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

export default function WhySifa() {
  return (
    <div className="px-2 md:px-0">
      {/* <div>
        <img src="http://www.trysifa.com/assets/ss2-5ac18fd3ae76b25a676e3cae74a2bbb3ca082d9f5c7b242cbb04f5118c1cb4da.png" alt="Why sifa" />
      </div> */}
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="http://www.trysifa.com/assets/ss2-5ac18fd3ae76b25a676e3cae74a2bbb3ca082d9f5c7b242cbb04f5118c1cb4da.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full shadow-xl rounded-xl"
            alt="why sifa"
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-16 lg:max-w-screen-xl">
          <div className="md:mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Why SIFA?
              </h2>
              <p className="text-base text-gray-500 md:text-lg">
                We are the world's first AI-powered GPT assistant for financial advisors.
                SIFA helps financial advisors streamline their work and focus on building strong,
                authentic relationships with clients. With SIFA, financial advisors can save time
                and effort on middle-office tasks, freeing up more time for meaningful client
                interactions and relationship-building.
              </p>
              <Link className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700 mt-6" to="/">Get started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
