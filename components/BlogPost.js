import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import DynamicComponent from './DynamicComponent';

const BlogPost = ({ blok }) => {
  const textWithBlocks = blok.long_text.content.reduce((parts, part, i) => {
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
    <div>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      {textWithBlocks.map((b, i) => {
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
            <DynamicComponent
              key={`${blok._uid}-text_blok${i}`}
              blok={b.attrs.body[0]}
            />
          );
        }
      })}
    </div>
  );
};

export default BlogPost;
