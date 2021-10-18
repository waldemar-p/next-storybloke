import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import DynamicComponent from './DynamicComponent';

const Text = ({ blok }) => {
  const textWithComponents = blok.text.content.reduce((parts, part, i) => {
    if (part.type === 'blok') {
      parts.push(part);
    } else if (parts[parts.length - 1]?.type === 'doc') {
      parts[parts.length - 1].content.push(part);
    } else {
      parts.push({ type: 'doc', content: [part] });
    }

    return parts;
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto py-12">
        {textWithComponents.map((b, i) => {
          if (b.type === 'doc') {
            return (
              <div
                key={`${blok._uid}-doc${i}`}
                className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center"
              >
                <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
                  {render(b)}
                </div>
              </div>
            );
          } else {
            return (
              <DynamicComponent key={`c${blok._uid}`} blok={b.attrs.body[0]} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Text;
