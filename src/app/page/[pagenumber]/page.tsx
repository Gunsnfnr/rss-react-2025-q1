'use client';

import { ThemeProvider } from '../../../context/themeContext';
import { Main } from '../../../components/Main/Main';
import { fetchAllSpecies, QueryParams } from '../../fetchAllSpecies';
import { fetchSpecies } from '../../fetchSpeciesData';
import { SearchResults, Species } from '../../../types';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const params = useParams();
  const { pagenumber } = params as Record<string, string>;
  const pageNumber = Number(pagenumber) || 1;
  const searchParams = useSearchParams();

  const search = searchParams?.get('search') ?? '';
  const id = searchParams?.get('id');

  const [fetchedAllSpecies, setFetchedAllSpecies] = useState<SearchResults>({
    results: [],
    next: '',
    count: null,
  });
  const [fetchedSpecies, setFetchedSpecies] = useState<Species | null>(null);

  useEffect(() => {
    const queryParams: QueryParams = {
      search,
      pagenumber: pageNumber.toString(),
    };

    const fetchData = async () => {
      setFetchedAllSpecies({ results: [], next: '', count: null });
      const allSpeciesData = await fetchAllSpecies(queryParams);
      setFetchedAllSpecies(allSpeciesData);
    };

    fetchData();
  }, [pageNumber, search]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const speciesData = await fetchSpecies(id);
        setFetchedSpecies(speciesData);
      } else {
        setFetchedSpecies(null);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <ThemeProvider>
        <Main allSpeciesData={fetchedAllSpecies} speciesData={fetchedSpecies as Species} />
      </ThemeProvider>
    </>
  );
}
