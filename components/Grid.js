import DynamicComponent from './DynamicComponent';

const Grid = ({
  blok,
  propertyName = 'columns',
  parentClass = 'flex',
  childClass = 'flex-auto',
}) => (
  <ul className={`${parentClass} py-8 mb-6 container mx-auto`}>
    {blok[propertyName].map((nestedBlok) => (
      <li key={nestedBlok._uid} className={`${childClass} px-6`}>
        <DynamicComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
