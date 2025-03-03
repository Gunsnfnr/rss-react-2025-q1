import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ThemeProvider } from '../../context/themeContext';
import { SearchResults, Species } from '../../types';
import { Main } from '../../components/Main/Main';
import Head from 'next/head';

export const getServerSideProps = (async (context) => {
  const search = context.query.search || '';
  const page = context.query.pagenumber || 1;

  const allSpeciesData = await fetch(`https://swapi.dev/api/species/?search=${search}&page=${page}`)
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
    <>
      <Head>
        <title>Next.js React App</title>
      </Head>
      <ThemeProvider>
        <Main allSpeciesData={allSpeciesData} speciesData={speciesData as Species} />
      </ThemeProvider>
    </>
  );
}
