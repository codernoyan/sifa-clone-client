/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForYou() {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-20 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Is this for you?
            </h2>
            <div className="text-base text-gray-500 md:text-lg space-y-3 text-justify">
              <p>
                Are you tired of spending countless hours on middle-office work, such as
                summarising fact finds, meeting preparation, and prospecting? SIFA takes
                care of all of that for you, allowing you to focus on what truly
                matters - meeting and serving your clients.
              </p>
              <p>
                Our technology was specifically designed to help independent and
                self-employed financial advisors compete with larger firms,
                without the need for additional staff.
              </p>
              <p>
                Don't just take our word for it, try SIFA for yourself
                with our free trial. Experience the time and effort
                savings for yourself and see how it can benefit your
                business. Sign up now for our free trial.
              </p>
            </div>
            <Link to="/" className="inline-flex mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">Get started</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-stretch">
        <img
          src="http://www.trysifa.com/assets/ss1-099c496517f128d2f45bf7884cc0ba2596bea02b5bd3637d674a6844915d2752.png"
          className="object-cover object-top md:object-left w-full h-64 max-w-xl shadow-2xl rounded-t-lg lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
  );
}
