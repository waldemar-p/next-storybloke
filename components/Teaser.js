import React from 'react';

const Teaser = ({ blok }) => {
  if (!blok.medium) return;

  const fileEnding = blok.medium.filename.slice(
    blok.medium.filename.lastIndexOf('.') + 1
  );

  let type = 'image';
  if (['mp4'].includes(fileEnding)) type = 'video';

  const className = 'w-full';

  return (
    <div className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
        {type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            src={blok.medium.filename}
            className={className}
          ></video>
        ) : (
          <img
            src={blok.medium.filename}
            alt={blok.medium.alt}
            className={className}
          />
        )}
      </div>
    </div>
  );
};

export default Teaser;
