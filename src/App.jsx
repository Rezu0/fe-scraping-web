import { BrowserRouter, Route, Navigate, Routes, useNavigate, Outlet } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import MainComponent from './component/MainComponent';

import 'primeicons/primeicons.css';
import PageDetailVideosComponent from './component/PageDetailVideosComponent';
import TagCategoriesComponent from './component/card/TagCategoriesComponent';
        

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
              path='categories'
              element={<TagCategoriesComponent />}
            />

          <Route 
            path="videos" 
          >
            <Route
              path=":slug"
              element={<PageDetailVideosComponent />} />
          </Route>
            
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
