import { Main } from '~/components/Main/Main';
import type { Route } from './+types/main';

export default function MainPage({ loaderData }: Route.ComponentProps) {
  return <Main data={loaderData.speciesData} detailsData={loaderData.detailsData} />;
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const page = url.pathname.split('/').pop() || '1';

  const speciesResponse = await fetch(
    `https://swapi.dev/api/species/?search=${search}&page=${page}`
  );
  if (!speciesResponse.ok) {
    throw new Response('Fetching species failed with status: ', { status: speciesResponse.status });
  }
  const speciesData = await speciesResponse.json();

  let detailsData = null;
  const id = url.searchParams.get('id');
  if (id) {
    const detailsResponse = await fetch(`https://swapi.dev/api/species/${id}/`);
    if (detailsResponse.ok) {
      detailsData = await detailsResponse.json();
    }
  }

  console.log('detailsData: ', detailsData);
  return { speciesData, detailsData };
}
