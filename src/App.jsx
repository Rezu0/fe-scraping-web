import { BrowserRouter, Route, Navigate, Routes, useNavigate, Outlet } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import MainComponent from './component/MainComponent';

import 'primeicons/primeicons.css';
import PageDetailVideosComponent from './component/PageDetailVideosComponent';
        

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<HomeComponent />}
          >
            <Route 
              index
              element={<MainComponent />}
            />

          <Route 
            path="videos" 
          >
            <Route
              path=":slug"
              element={<PageDetailVideosComponent />} />
          </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
