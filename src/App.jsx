import { BrowserRouter, Routes, Route  } from 'react-router';

import { DashboardPage} from './pages/dashboard'
import { Details } from './pages/details';
import { Layout } from './pages/Layout';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route index element={<DashboardPage/>} />
          <Route path="my-collection" element={(<section>My Collections Page</section>)} />
          <Route path="about" element={(<section>About Page</section>)} />
          <Route path="details/:pokeid" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


/**
  Functional Component
  Statefull Components
 */

export default App
