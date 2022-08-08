import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Menu from '../pages/Menu';
import Campeonato from '../pages/Campeonato';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/campeonato/:id" element={<Campeonato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
