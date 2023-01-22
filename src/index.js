import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './componets/About';
import Quotes from './componets/Quotes';


ReactDOM.render(

  <Router>
    <Routes>
      <Route path = '/' element = {<App/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/Quotes' element = {<Quotes/>}/>
    </Routes>
  </Router>,
  
  document.getElementById('root')
);
