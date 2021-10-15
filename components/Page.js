import DynamicComponent from './DynamicComponent';

const Page = ({ blok }) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={`c${blok._uid}`} />
        ))
      : null}
  </main>
);

export default Page;
