import React from 'react';
import { Navigation } from './components';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import { Main, Partners, Schedule } from './pages/';

function App() {
  let [page, setPage] = React.useState('main');

  return (
    <div className='App'>
      <Navigation />
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
