import React from 'react';
import './App.css';
import Aside from './componentes/Aside';
import AsideHidden from "./componentes/AsideHidden"
import Header from './componentes/Header';
import Sectionvideos from './componentes/Sectionvideos'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SearchPage from './componentes/SearchPage';
import SectionReproduction from './componentes/SectionReproduction'

function App() {
  const PrimeraPg = () => (
    <>
      <div className="div-main">
        <Aside />
        <Sectionvideos />
      </div>
    </>
  );
  const SegundaPg = () => (
    <>
      <div className="div-main">
        <Aside />
        <SearchPage />
      </div>    
    </>
  );
  const TerceraPg = () => (
    <>
      <div className="div-main">
        <AsideHidden />
        <SectionReproduction />
      </div>    
    </>
  );
  return (
    <div className="div-app"> 
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" 
            element={<PrimeraPg/>}>
          </Route>
          <Route exact path="/search/:setInputSearch"
            element={<SegundaPg/>}>
          </Route>
          <Route exact path={`/video/:setTitle`}
            element={<TerceraPg/>}>
          </Route>          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
