/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Metrics() {
  return (
    <section className="bg-gray-900 text-white font-inter mt-6">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-3xl">
            Financial advisors on average spend up to 20 hours per week on administrative tasks.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            <div className="ml-4">
              <h2 className="text-lg font-bold">3X</h2>
              <p className="mt-1 text-lg text-gray-300">
                Clients who receive tailored communication regularly
                from financial advisors are 3X more likely to stick
                with them for more than five years.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            <div className="ml-4">
              <h2 className="text-lg font-bold">78%</h2>
              <p className="mt-1 text-lg text-gray-300">
                Clients are 78% more likely to give referrals if they
                feel their advisor is responsive to their needs and feels valued.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            <div className="ml-4">
              <h2 className="text-lg font-bold">68%</h2>
              <p className="mt-1 text-lg text-gray-300">
                Advisors who send one-page financial plans and meeting summaries are
                shown to close 68% of their sales opportunities,
                compared to 48% for advisors who don't use them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
