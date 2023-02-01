/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Ready to dive in?
            <br />
            Get notified when we’re launching.
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <form>
            <div className="flex flex-col justify-center md:flex-row gap-4 mt-12 mb-16">
              <input type="text" className="border border-gray-500 rounded-md px-4 w-full py-3 md:w-1/2" placeholder="Enter your email" />
              <button type="submit" className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-inter font-medium">Join our free trial</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
