const Headline = ({ blok }) => {
  if (!blok) return null;

  const CustomTag = `${blok.tag}`;

  return <CustomTag>{blok.text}</CustomTag>;
};

export default Headline;
