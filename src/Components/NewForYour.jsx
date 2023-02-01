/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NewForYour() {
  return (
    <section className="container mx-auto px-2 md:px-0">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Is this for you?
            </h2>
            <div className="hidden text-gray-500 md:mt-4 md:block text-justify space-y-3">
              <p>
                Are you tired of spending countless hours on middle-office work,
                such as summarising fact finds, meeting preparation, and prospecting?
                SIFA takes care of all of that for you, allowing you to focus on what
                truly matters - meeting and serving your clients.
              </p>

              <p>
                Our technology was specifically designed to help independent and
                self-employed financial advisors compete with larger firms, without
                the need for additional staff.
              </p>

              <p>
                Don't just take our word for it, try SIFA for yourself with
                our free trial. Experience the time and effort savings for
                yourself and see how it can benefit your business. Sign up now for our free trial.
              </p>
            </div>
            <div className="mt-4 md:mt-8">
              <Link to="/" className="inline-block rounded bg-indigo-600 px-12 py-3 font-inter font-medium text-white transition hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-500">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
        <img alt="Student" src="http://www.trysifa.com/assets/ss1-099c496517f128d2f45bf7884cc0ba2596bea02b5bd3637d674a6844915d2752.png" className="h-auto w-full object-cover object-top md:object-left sm:h-full rounded-t-lg shadow-xl shadow-slate-600" />
      </section>
    </section>
  );
}
