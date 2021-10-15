import SbEditable from 'storyblok-react';
import BlogPost from './BlogPost';
import Feature from './Feature';
import FeaturedPosts from './FeaturedPosts';
import Grid from './Grid';
import Page from './Page';
import Placeholder from './Placeholder';
import PostsList from './PostsList';
import Teaser from './Teaser';
import Text from './Text';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  'featured-posts': FeaturedPosts,
  page: Page,
  post: BlogPost,
  text: Text,
  'selected-posts': PostsList,
};

const DynamicComponent = ({ blok, isEditable = true }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];

    if (isEditable) {
      return (
        <SbEditable content={blok} key={blok._uid}>
          <Component blok={blok} />;
        </SbEditable>
      );
    }

    return <Component blok={blok} key={blok._uid} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
