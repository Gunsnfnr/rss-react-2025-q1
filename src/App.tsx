import { Route, Routes } from 'react-router';
import { Main } from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import { Details } from './components/Details/Details';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="species/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export { App };
