import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Congrat from './pages/Congrat'
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <div className="App dashboard w-full min-h-screen h-fit text-white">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/congrat" element={<Congrat/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
