import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ThemeProvider } from '../context/themeContext';
import { SearchResults, Species } from '../types';
import { Main } from '../components/Main/Main';

export const getServerSideProps = (async (context) => {
  const allSpeciesData = await fetch(
    `https://swapi.dev/api/species/?search=${context.query.search as string}&page=
    // ${context.query.page ? (context.query.page as string) : 1}`
  )
    .then((res) => res.json())
    .then((data: SearchResults) => data);

  let speciesData: Species | null = null;
  if (context.query.id)
    speciesData = await fetch(`https://swapi.dev/api/species/${context.query.id as string}`)
      .then((res) => res.json())
      .then((data: Species) => data);

  return { props: { allSpeciesData, speciesData } };
}) satisfies GetServerSideProps<{ allSpeciesData: SearchResults; speciesData: Species | null }>;

export default function Home({
  allSpeciesData,
  speciesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ThemeProvider>
      <Main allSpeciesData={allSpeciesData} speciesData={speciesData} />
    </ThemeProvider>
  );
}
