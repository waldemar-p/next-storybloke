import Grid from './Grid';
import Headline from './Headline';

const Faq = ({ blok }) => {
  return (
    <div className="py-8 mb-6 container mx-auto faq">
      <Headline blok={blok.headline?.[0]} />
      <Grid
        blok={blok}
        propertyName={'faq_elements'}
        parentClass=""
        childClass=""
      />
    </div>
  );
};

export default Faq;
