import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const Card = ({ image, name,video, price }) => (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex-col">
        <div className="md:flex-shrink-0">
          <HoverVideoPlayer
            videoSrc={video}
            pausedOverlay={
              <img
                src={image}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <p className="mt-2 text-gray-500">{price}</p>
        </div>
      </div>
    </div>
);
export default Card;
