import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Root from './pages/root/Root.js';
import Construction from './pages/Construction/Construction.js';
import Home from './pages/Home/Home.js'
import Director from './pages/Director/Director.js';
import DirectorWork from './pages/Director/DirectorWork.js';
import DirectorProject from './pages/Director/DirectorProject.js'
import Coding from './pages/Coding/Coding.js';
import CodingWork from './pages/Coding/CodingWork.js';
import Webs from './pages/Webs/Webs.js'
import WebWork from './pages/Webs/WebWork.js';
import WebProject from './pages/Webs/WebProject.js';
import Books from './pages/Books/Books.js';
import BookNotes from './pages/Books/BookNotes.js';
import Courses from './pages/Courses/Courses.js';
import Certifications from './pages/Certifications/Certifications.js';

import WEB_PROJECTS from './data/WEB_PROJECTS.js';
import BOOK_LIST from './data/BOOK_LIST.js';
import PM_PROJECTS from './data/PM_PROJECTS.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route index element={ <Home/> }/>
      <Route path='/under-construction' element={ <Construction/> }/>
      <Route path='/project-manager' element={ <Director/> }/>
      <Route path='/project-manager-portfolio' element={ <DirectorWork/> }/>
      {PM_PROJECTS.map((project, index) => {
        return <Route path={project.path} element={ <DirectorProject data={project}/> } key={index}/>
      })}
      <Route path='/full-stack-developer' element={ <Coding/> }/>
      <Route path='/full-stack-portfolio' element={ <CodingWork/> }/>
      <Route path='/web-designer' element={ <Webs/> }/>
      <Route path='/web-design-portfolio' element={ <WebWork/> }/>
      {WEB_PROJECTS.map((web, index) => {
        return <Route path={web.path} element={ <WebProject data={web}/> } key={index}/>
      })}
      <Route path='/reading-list' element={ <Books/> }/>
      {BOOK_LIST.map((book, index) => {
        return <Route path={book.path} element={ <BookNotes data={book}/> } key={index}/>
      })}
      <Route path='/courses' element={ <Courses/> }/>
      <Route path='/certifications' element={ <Certifications/> }/>
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
