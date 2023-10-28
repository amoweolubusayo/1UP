import React from 'react';

const Card = ({ video, price }) => (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <video className="h-48 w-full object-cover md:w-48" src={video} controls />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Price</div>
          <p className="mt-2 text-gray-500">{price}</p>
        </div>
      </div>
    </div>
  );
export default Card;
