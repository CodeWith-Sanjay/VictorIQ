import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <div className='m-0 p-0 box-border bg-page-bg h-full w-full min-h-[2000px]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
