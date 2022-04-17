import './App.css';
import './css/bootstrap.min.css';
// import { useEffect, useState } from 'react';

// import Preloader from './components/preloader';

import HomePage from './pages/index';
import Header from './components/Header'
// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }


function App() {

  

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
