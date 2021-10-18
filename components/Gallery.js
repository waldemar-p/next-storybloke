import Grid from './Grid';
import Headline from './Headline';

const Gallery = ({ blok }) => {
  return (
    <div className="md:px-4 py-8 mb-6 mx-auto gallery">
      <Headline blok={blok.headline?.[0]} />
      <Grid
        blok={blok}
        propertyName={'gallery_elements'}
        parentClass="flex"
        childClass="flex-grow w-full"
      />
    </div>
  );
};

export default Gallery;
