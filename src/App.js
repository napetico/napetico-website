import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './pages/root/Root.js';
import Construction from './pages/Construction/Construction.js';
import Home from './pages/Home/Home.js'
import Coding from './pages/Coding/Coding.js';
import CodingWork from './pages/Coding/CodingWork.js';
import Webs from './pages/Webs/Webs.js'
import WebWork from './pages/Webs/WebWork.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route index element={ <Home/> }/>
      <Route path='/under-construction' element={ <Construction/> }/>
      <Route path='/full-stack-developer' element={ <Coding/> }/>
      <Route path='/full-stack-portfolio' element={ <CodingWork/> } />
      <Route path='/web-designer' element={ <Webs/> } />
      <Route path='/web-design-portfolio' element={ <WebWork/> } />
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
