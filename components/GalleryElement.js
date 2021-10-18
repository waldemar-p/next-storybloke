import React from 'react';

const GalleryElement = ({ blok }) => {
  if (!blok.medium) return;

  const fileEnding = blok.medium.filename.slice(
    blok.medium.filename.lastIndexOf('.') + 1
  );

  let type = 'image';
  if (['mp4'].includes(fileEnding)) type = 'video';

  const className = 'w-full';

  return type === 'video' ? (
    <video className={className} controls src={blok.medium.filename}></video>
  ) : (
    <img
      className={className}
      src={blok.medium.filename}
      alt={blok.medium.alt}
    />
  );
};

export default GalleryElement;
