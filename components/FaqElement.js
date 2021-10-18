import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

const FaqElement = ({ blok }) => (
  <div className="py-16 p-2 sm:p-10 text-center flex flex-col items-center">
    <div className="px-6 py-4">
      <div className="font-bold text-xl my-4">{blok.question}</div>
      {render(blok.answer)}
    </div>
  </div>
);

export default FaqElement;
