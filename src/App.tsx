import { Route, Routes } from 'react-router';
import { Main } from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export { App };
