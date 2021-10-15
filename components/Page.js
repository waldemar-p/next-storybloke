import DynamicComponent from './DynamicComponent';

const Page = ({ blok }) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => <DynamicComponent blok={blok} />)
      : null}
  </main>
);

export default Page;
