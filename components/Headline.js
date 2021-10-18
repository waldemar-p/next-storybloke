const Headline = ({ blok }) => {
  if (!blok || !blok?.tag) return null;

  const CustomTag = `${blok.tag}`;

  return <CustomTag>{blok.text}</CustomTag>;
};

export default Headline;
