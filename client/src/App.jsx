import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import NavProvider from './components/landing/Navbar/NavProvider.jsx';

function App() {

  return (
    
      <BrowserRouter className='m-0 p-0 box-border bg-page-bg h-[5000px] w-full min-h-screen'>
      <NavProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </NavProvider>
      </BrowserRouter>
  )
}

export default App
