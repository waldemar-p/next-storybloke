import SbEditable from 'storyblok-react';
import BlogPost from './BlogPost';
import Faq from './Faq';
import FaqElement from './FaqElement';
import Feature from './Feature';
import FeaturedPosts from './FeaturedPosts';
import Gallery from './Gallery';
import GalleryElement from './GalleryElement';
import Grid from './Grid';
import ImgPic from './ImgPic';
import Page from './Page';
import Placeholder from './Placeholder';
import PostsList from './PostsList';
import Teaser from './Teaser';
import Text from './Text';

const Components = {
  post: BlogPost,
  faq: Faq,
  'faq-element': FaqElement,
  feature: Feature,
  'featured-posts': FeaturedPosts,
  gallery: Gallery,
  'gallery-element': GalleryElement,
  grid: Grid,
  'img-pic': ImgPic,
  page: Page,
  'selected-posts': PostsList,
  teaser: Teaser,
  text: Text,
};

const DynamicComponent = ({ blok, isEditable = true }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];

    if (isEditable) {
      return (
        <SbEditable content={blok} key={blok._uid}>
          <Component blok={blok} />
        </SbEditable>
      );
    }

    return <Component blok={blok} key={`c${blok._uid}`} />;
  }
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Placeholder componentName={blok.component} />
    </SbEditable>
  );
};

export default DynamicComponent;
