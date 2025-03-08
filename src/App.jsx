import { BrowserRouter, Route, Navigate, Routes, useNavigate, Outlet } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import MainComponent from './component/MainComponent';

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

          <Route path="videos" element={ <> <h1>ngeri banget</h1> <Outlet /> </> }>
            <Route path="id" element={<h1 className='text-white'>Ini videos1</h1>} />
          </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
