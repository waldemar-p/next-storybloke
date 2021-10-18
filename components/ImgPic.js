import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const ImgPic = ({ blok }) => {
  const isRight = blok.position === 'img_right';

  const img = (
    <img
      src={blok.image?.filename}
      alt={blok.image?.alt}
      className={`w-1/2 p${isRight ? 'l' : 'r'}-4`}
    />
  );

  return (
    <div className="pb-6 pt-16 container mx-auto flex">
      {!isRight ? img : null}

      <div className={`w-1/2 p${!isRight ? 'l' : 'r'}-4`}>
        {render(blok.text)}
      </div>

      {isRight ? img : null}
    </div>
  );
};

export default ImgPic;
